import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { createStaticServer, resolveAssetPath } from "./serve-static.mjs";

let rootDir;
let server;
let baseUrl;

async function listen(serverInstance) {
  await new Promise((resolve) => {
    serverInstance.listen(0, "127.0.0.1", resolve);
  });

  const address = serverInstance.address();
  return `http://127.0.0.1:${address.port}`;
}

describe("Railway static server", () => {
  beforeEach(async () => {
    rootDir = await mkdtemp(path.join(tmpdir(), "akp-static-"));
    await writeFile(path.join(rootDir, "index.html"), "<main>AKP App</main>");
    await writeFile(path.join(rootDir, "app.js"), "console.log('akp');");
    server = createStaticServer({ rootDir });
    baseUrl = await listen(server);
  });

  afterEach(async () => {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve(undefined)));
    });
    await rm(rootDir, { recursive: true, force: true });
  });

  it("answers Railway health checks", async () => {
    const response = await fetch(`${baseUrl}/healthz`);

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("text/plain");
    expect(await response.text()).toBe("ok");
  });

  it("serves immutable assets and falls back to index.html for SPA routes", async () => {
    const asset = await fetch(`${baseUrl}/app.js`);
    const fallback = await fetch(`${baseUrl}/projekte/rheinblick`);

    expect(asset.status).toBe(200);
    expect(asset.headers.get("cache-control")).toBe("public, max-age=31536000, immutable");
    expect(asset.headers.get("content-type")).toContain("text/javascript");
    expect(await asset.text()).toContain("akp");

    expect(fallback.status).toBe(200);
    expect(fallback.headers.get("cache-control")).toBe("no-cache");
    expect(await fallback.text()).toContain("AKP App");
  });

  it("rejects path traversal attempts before file lookup", () => {
    expect(resolveAssetPath("/%2e%2e/package.json", rootDir)).toBeNull();
    expect(resolveAssetPath("/..%2fpackage.json", rootDir)).toBeNull();
  });

  it("returns proper method and HEAD responses", async () => {
    const head = await fetch(`${baseUrl}/app.js`, { method: "HEAD" });
    const method = await fetch(`${baseUrl}/app.js`, { method: "POST" });

    expect(head.status).toBe(200);
    expect(await head.text()).toBe("");
    expect(method.status).toBe(405);
    expect(method.headers.get("allow")).toBe("GET, HEAD");
  });
});
