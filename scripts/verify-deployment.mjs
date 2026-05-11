import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const rootDir = path.resolve(process.cwd(), "dist");
const indexPath = path.join(rootDir, "index.html");
const requiredImages = [
  "hero-architecture.jpg",
  "project-residential.jpg",
  "project-cultural.jpg",
  "project-commercial.jpg",
  "project-office.jpg",
  "project-healthcare.jpg",
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function assertFile(filePath) {
  await access(filePath);
  const fileStat = await stat(filePath);
  assert(fileStat.isFile(), `${filePath} is not a file`);
  assert(fileStat.size > 0, `${filePath} is empty`);
}

const html = await readFile(indexPath, "utf8");

assert(html.includes('<html lang="de">'), "index.html must declare German document language");
assert(html.includes('name="description"'), "index.html must contain an SEO description");
assert(html.includes("AKP Architekten Kauschke + Partner"), "index.html must contain the AKP brand");
assert(html.includes('id="root"'), "index.html must contain the React root node");
assert(!html.includes('/src/main.tsx'), "production HTML must not reference the Vite dev entrypoint");

await Promise.all(requiredImages.map((fileName) => assertFile(path.join(rootDir, "images", fileName))));

console.log("Deployment artifact verification passed");
