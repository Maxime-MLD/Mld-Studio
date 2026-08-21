import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { render } from "../dist-ssr/entry-server.js";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = resolve(projectRoot, "dist");
const template = await readFile(resolve(distDirectory, "index.html"), "utf8");

const routes = [
  "/",
  "/realisations",
  "/blog",
  "/blog/importance-site-internet-roanne-2026",
  "/blog/google-maps-roanne-fiche-optimisee",
  "/blog/erreurs-seo-local-roanne",
  "/blog/site-monopage-multipage-loire",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
  "/404",
];

for (const route of routes) {
  const { html, head } = render(route);
  const document = template
    .replace("</head>", `${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outputFile =
    route === "/"
      ? resolve(distDirectory, "index.html")
      : route === "/404"
        ? resolve(distDirectory, "404.html")
        : resolve(distDirectory, route.slice(1), "index.html");

  await mkdir(dirname(outputFile), { recursive: true });
  await writeFile(outputFile, document, "utf8");
}

await rm(resolve(projectRoot, "dist-ssr"), { recursive: true, force: true });
