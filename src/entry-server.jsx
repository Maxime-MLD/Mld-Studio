import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

export function render(url) {
  const helmetContext = {};
  const rendered = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
  const { helmet } = helmetContext;
  const head = [
    helmet?.title?.toString(),
    helmet?.priority?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
  ]
    .filter(Boolean)
    .join("\n");
  // React 19 sérialise aussi les balises Helmet dans le flux HTML. Le titre,
  // les metas et la canonical sont déplacés dans <head>. Les resource hints et
  // le JSON-LD restent dans le flux afin de conserver une hydratation exacte ;
  // Schema.org autorise le JSON-LD dans le corps du document.
  const html = rendered
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*\/?\s*>/gi, "")
    .replace(/<link\b(?=[^>]*\brel="canonical")[^>]*\/?\s*>/gi, "");

  return {
    html,
    head,
  };
}
