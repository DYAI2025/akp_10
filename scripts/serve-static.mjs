import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..", "dist");
const parsedPort = Number.parseInt(process.env.PORT ?? "", 10);
const port = Number.isFinite(parsedPort) ? parsedPort : 3000;
const host = process.env.HOST ?? "0.0.0.0";

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
    ...headers,
  });
  res.end(body);
}

function resolveAssetPath(requestUrl) {
  const url = new URL(requestUrl ?? "/", `http://${host}:${port}`);
  let decodedPath;

  try {
    decodedPath = decodeURIComponent(url.pathname);
  } catch {
    return null;
  }
  const normalizedPath = path.normalize(decodedPath).replace(/^([/\\])+/, "");
  const assetPath = path.resolve(root, normalizedPath || "index.html");

  const relativePath = path.relative(root, assetPath);

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

async function getFilePath(requestUrl) {
  const assetPath = resolveAssetPath(requestUrl);

  if (!assetPath) {
    return null;
  }

  if (await fileExists(assetPath).catch(() => false)) {
    return assetPath;
  }

  return path.join(root, "index.html");
}

async function handleRequest(req, res) {
  if (req.url === "/healthz") {
    send(res, 200, "ok", { "Content-Type": "text/plain; charset=utf-8" });
    return;
  }

  if (!["GET", "HEAD"].includes(req.method ?? "")) {
    send(res, 405, "Method Not Allowed", { Allow: "GET, HEAD" });
    return;
  }

  const filePath = await getFilePath(req.url);

  if (!filePath) {
    send(res, 403, "Forbidden");
    return;
  }

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

  createReadStream(filePath).pipe(res);
}

const server = createServer((req, res) => {
  handleRequest(req, res).catch((error) => {
    console.error("Unhandled server error", error);
    send(res, 500, "Internal Server Error");
  });
});

server.listen(port, host, () => {
  console.log(`Static server listening on http://${host}:${port}`);
});
