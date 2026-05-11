import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const defaultRoot = path.resolve(__dirname, "..", "dist");
function parsePort(value, fallback = 3000) {
  const parsed = Number.parseInt(value ?? "", 10);

  if (!Number.isInteger(parsed) || parsed < 0 || parsed > 65535) {
    return fallback;
  }

  return parsed;
}

const port = parsePort(process.env.PORT);
const host = process.env.HOST ?? "0.0.0.0";
const root = path.resolve(process.env.STATIC_ROOT ?? defaultRoot);

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
]);

function send(res, statusCode, body, headers = {}) {
  res.writeHead(statusCode, {
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    ...headers,
  });
  res.end(res.req?.method === "HEAD" ? undefined : body);
}

export function resolveAssetPath(requestUrl, rootDir = root) {
  const rawPath = String(requestUrl ?? "/").split(/[?#]/)[0] || "/";
  let decodedPath;

  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    return null;
  }

  const strippedPath = decodedPath.replace(/^[\/\\]+/, "");

  if (strippedPath.split(/[\/\\]+/).includes("..")) {
    return null;
  }

  const normalizedPath = path.normalize(strippedPath);
  const assetPath = path.resolve(rootDir, normalizedPath || "index.html");
  const relativePath = path.relative(rootDir, assetPath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  return assetPath;
}

async function fileExists(filePath) {
  await access(filePath);
  const fileStat = await stat(filePath);
  return fileStat.isFile();
}

async function getFilePath(requestUrl, rootDir) {
  const assetPath = resolveAssetPath(requestUrl, rootDir);

  if (!assetPath) {
    return { statusCode: 403 };
  }

  if (await fileExists(assetPath).catch(() => false)) {
    return { filePath: assetPath };
  }

  if (path.extname(assetPath)) {
    return { statusCode: 404 };
  }

  const indexPath = path.join(rootDir, "index.html");

  if (await fileExists(indexPath).catch(() => false)) {
    return { filePath: indexPath };
  }

  return { statusCode: 404 };
}

export function createStaticServer({ rootDir = root } = {}) {
  const serverRoot = path.resolve(rootDir);

  return createServer((req, res) => {
    handleRequest(req, res, serverRoot).catch((error) => {
      console.error("Unhandled server error", error);
      send(res, 500, "Internal Server Error", { "Content-Type": "text/plain; charset=utf-8" });
    });
  });
}

async function handleRequest(req, res, rootDir) {
  const requestPath = String(req.url ?? "/").split(/[?#]/)[0] || "/";

  if (requestPath === "/healthz") {
    send(res, 200, "ok", { "Content-Type": "text/plain; charset=utf-8" });
    return;
  }

  if (!["GET", "HEAD"].includes(req.method ?? "")) {
    send(res, 405, "Method Not Allowed", {
      Allow: "GET, HEAD",
      "Content-Type": "text/plain; charset=utf-8",
    });
    return;
  }

  const result = await getFilePath(req.url, rootDir);

  if (!result.filePath) {
    const statusCode = result.statusCode ?? 404;
    const message = statusCode === 403 ? "Forbidden" : "Not Found";
    send(res, statusCode, message, { "Content-Type": "text/plain; charset=utf-8" });
    return;
  }

  const { filePath } = result;
  const extension = path.extname(filePath).toLowerCase();
  const isIndex = path.basename(filePath) === "index.html";

  res.writeHead(200, {
    "Cache-Control": isIndex ? "no-cache" : "public, max-age=31536000, immutable",
    "Content-Type": contentTypes.get(extension) ?? "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
  });

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  const fileStream = createReadStream(filePath);

  res.on("close", () => {
    if (!fileStream.destroyed) {
      fileStream.destroy();
    }
  });

  fileStream.on("error", (error) => {
    console.error(`Failed to read static asset: ${filePath}`, error);

    if (!res.destroyed) {
      res.destroy(error);
    }
  });

  fileStream.pipe(res);
}

function listen() {
  const server = createStaticServer({ rootDir: root });

  server.listen(port, host, () => {
    const address = server.address();
    const actualPort = typeof address === "object" && address ? address.port : port;
    console.log(`Static server listening on http://${host}:${actualPort}`);
  });

  const shutdown = (signal) => {
    console.log(`Received ${signal}, shutting down static server`);
    server.close((error) => {
      if (error) {
        console.error("Failed to close static server", error);
        process.exit(1);
      }

      process.exit(0);
    });
  };

  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}

if (process.argv[1] === __filename) {
  listen();
}
