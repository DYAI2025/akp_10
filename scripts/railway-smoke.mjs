import { spawn } from "node:child_process";

const port = process.env.SMOKE_PORT ?? "4173";
const baseUrl = `http://127.0.0.1:${port}`;
const startupTimeoutMs = 15_000;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForHealth() {
  const deadline = Date.now() + startupTimeoutMs;
  let lastError;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/healthz`);

      if (response.ok && (await response.text()) === "ok") {
        return;
      }

      lastError = new Error(`Unexpected health response: ${response.status}`);
    } catch (error) {
      lastError = error;
    }

    await wait(500);
  }

  throw lastError ?? new Error("Timed out waiting for Railway healthcheck");
}

async function assertResponse(path, expectedStatus, contentTypeFragment) {
  const response = await fetch(`${baseUrl}${path}`);
  const body = await response.text();
  const contentType = response.headers.get("content-type") ?? "";

  if (response.status !== expectedStatus) {
    throw new Error(`${path} returned ${response.status}, expected ${expectedStatus}`);
  }

  if (!contentType.includes(contentTypeFragment)) {
    throw new Error(`${path} returned content-type ${contentType}, expected ${contentTypeFragment}`);
  }

  return { body, response };
}

function stopServer(server) {
  return new Promise((resolve) => {
    if (server.exitCode !== null || server.signalCode !== null) {
      resolve();
      return;
    }

    const timeout = setTimeout(() => {
      server.kill("SIGKILL");
    }, 5_000);

    server.once("exit", () => {
      clearTimeout(timeout);
      resolve();
    });

    server.kill("SIGTERM");
  });
}

const server = spawn(process.execPath, ["scripts/serve-static.mjs"], {
  env: { ...process.env, HOST: "127.0.0.1", PORT: port },
  stdio: ["ignore", "pipe", "pipe"],
});

let output = "";
server.stdout.on("data", (chunk) => {
  output += chunk;
});
server.stderr.on("data", (chunk) => {
  output += chunk;
});

try {
  await waitForHealth();

  const root = await assertResponse("/", 200, "text/html");
  if (!root.body.includes("AKP Architekten Kauschke + Partner")) {
    throw new Error("Root page did not include AKP brand copy");
  }

  const spaRoute = await assertResponse("/projekte/rheinblick", 200, "text/html");
  if (spaRoute.response.headers.get("cache-control") !== "no-cache") {
    throw new Error("SPA fallback did not use no-cache header");
  }

  await assertResponse("/missing-bundle.js", 404, "text/plain");

  console.log(`Railway smoke test passed at ${baseUrl}`);
} catch (error) {
  console.error(output);
  console.error(error);
  process.exitCode = 1;
} finally {
  await stopServer(server);
}
