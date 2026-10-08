import { mkdir, writeFile } from "node:fs/promises";

const root = new URL("../public/images/", import.meta.url);
await mkdir(root, { recursive: true });
const base = "https://demo.hotjoomlatemplates.com/architecture/";
const files = {
  "hero-house.jpg": base + "images/carousel/slide1.jpg",
  "hero-buildings.jpg": base + "images/carousel/slide2.jpg",
  "hero-commercial.jpg": base + "images/carousel/slide3.jpg",
  "hero-interior.jpg": base + "images/carousel/slide4.jpg",
  "about-building.jpg": base + "images/tall_image1.jpg",
  "about-interior.jpg": base + "images/tall_image2.jpg",
  "portfolio-buildings.jpg": base + "images/portfolio_tall_buildings.jpg",
  "portfolio-house.jpg": base + "images/portfolio_residential.jpg",
  "portfolio-interior.jpg": base + "images/portfolio_interior.jpg",
  "article-building.jpg": base + "images/blog/home_image1.jpg",
  "article-house.jpg": base + "images/blog/home_image3.jpg",
  "article-interior.jpg": base + "images/blog/home_image2.jpg",
  "contact-background.jpg":
    base + "media/templates/site/architecture/images/bottom_bg.jpg",
  "project-quintana.jpg":
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85&fit=crop",
  "project-melendez.jpg":
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85&fit=crop",
  "project-tapia.jpg":
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85&fit=crop",
  "project-almeida.jpg":
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85&fit=crop",
  "office.jpg":
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85&fit=crop",
  "plans.jpg":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85&fit=crop",
};
await Promise.all(
  Object.entries(files).map(async ([name, url]) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${name}: ${res.status}`);
    await writeFile(new URL(name, root), Buffer.from(await res.arrayBuffer()));
    console.log(name);
  }),
);
await mkdir(new URL("../src/app/fonts/", import.meta.url), { recursive: true });
const css = await (
  await fetch(
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" } },
  )
).text();
const urls = [...css.matchAll(/url\((https[^)]+)\)/g)];
if (!urls.length) throw new Error("Montserrat font missing");
const font = await fetch(urls.at(-1)[1]);
await writeFile(
  new URL("../src/app/fonts/montserrat.woff2", import.meta.url),
  Buffer.from(await font.arrayBuffer()),
);
console.log("Montserrat downloaded");

