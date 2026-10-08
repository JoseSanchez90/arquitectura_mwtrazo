import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const base = process.env.CHECK_BASE_URL || "http://localhost:3000";
const content = await readFile(
  new URL("../src/lib/content.ts", import.meta.url),
  "utf8",
);
const slugs = [...content.matchAll(/slug:\s*"([^"]+)"/g)].map(
  (match) => match[1],
);
const routes = [
  "/",
  "/nosotros",
  "/proyectos",
  "/servicios",
  "/verificador-sunarp",
  "/contactanos",
  "/preguntas-frecuentes",
  ...slugs.map(
    (slug) =>
      `/${slug.startsWith("familia-") ? "proyectos" : "servicios"}/${slug}`,
  ),
];
const assets = new Set();

for (const route of routes) {
  const response = await fetch(`${base}${route}`);
  assert.equal(response.status, 200, `${route}: HTTP ${response.status}`);
  const html = await response.text();
  assert.match(html, /<h1[\s>]/, `${route}: missing h1`);
  assert.match(
    html,
    /lang="es"/,
    `${route}: missing Spanish document language`,
  );
  assert.doesNotMatch(
    html,
    /href="https:\/\/mwtrazo\.vercel\.app/,
    `${route}: navigation still points to original site`,
  );
  for (const [, path] of html.matchAll(
    /(?:src|href)="(\/images\/[^"?#]+|\/_next\/static\/media\/[^"?#]+)"/g,
  ))
    assets.add(path);
  for (const [, path] of html.matchAll(/src="(\/_next\/image[^\"]+)"/g))
    assets.add(path.replaceAll("&amp;", "&"));
  console.log(`OK ${route}`);
}
assert.ok(assets.size > 0, "No image resources were discovered");
for (const path of assets) {
  const response = await fetch(`${base}${path}`, { method: "HEAD" });
  assert.equal(response.status, 200, `Missing asset ${path}`);
}
const missing = await fetch(`${base}/pagina-inexistente`);
assert.equal(missing.status, 404, "Unknown route must return 404");
console.log(
  `Verified ${routes.length} routes, ${assets.size} local assets, and 404 response.`,
);
