import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import contactHandler from "../api/contact.js";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const distRoot = resolve(projectRoot, "dist");
const args = process.argv.slice(2);
const valueAfter = (flag, fallback) => {
  const index = args.indexOf(flag);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const host = valueAfter("--host", "127.0.0.1");
const port = Number(valueAfter("--port", process.env.PORT || "4173"));

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};

function safePath(relativePath) {
  const candidate = resolve(distRoot, normalize(relativePath));
  return candidate === distRoot || candidate.startsWith(`${distRoot}${sep}`)
    ? candidate
    : null;
}

function resolveRequest(pathname) {
  const decoded = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (!decoded) return { file: resolve(distRoot, "index.html"), status: 200 };

  const direct = safePath(decoded);
  if (direct && existsSync(direct) && statSync(direct).isFile()) {
    return { file: direct, status: 200 };
  }

  const route = safePath(`${decoded.replace(/\/+$/, "")}/index.html`);
  if (route && existsSync(route)) return { file: route, status: 200 };

  return { file: resolve(distRoot, "404.html"), status: 404 };
}

createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || host}`);

  if (url.pathname === "/api/contact") {
    let rawBody = "";
    for await (const chunk of request) {
      rawBody += chunk;
      if (rawBody.length > 12_000) {
        response.statusCode = 413;
        return response.end(JSON.stringify({ error: "Requête trop volumineuse." }));
      }
    }
    try {
      request.body = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      request.body = {};
    }
    response.status = (statusCode) => {
      response.statusCode = statusCode;
      return response;
    };
    response.json = (data) => {
      response.setHeader("Content-Type", "application/json; charset=utf-8");
      response.end(JSON.stringify(data));
    };
    return contactHandler(request, response);
  }

  const { file, status } = resolveRequest(url.pathname);
  const extension = extname(file).toLowerCase();

  response.statusCode = status;
  response.setHeader("Content-Type", mimeTypes[extension] || "application/octet-stream");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader(
    "Cache-Control",
    extension === ".html" ? "no-cache" : "public, max-age=3600",
  );

  if (request.method === "HEAD") return response.end();
  return createReadStream(file).pipe(response);
}).listen(port, host, () => {
  console.log(`MLD Studio preview: http://${host}:${port}`);
});
