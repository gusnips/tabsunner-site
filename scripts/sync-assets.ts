/**
 * Syncs product screenshots from the sibling extension repo (`../chrome`) and
 * derives the two sizes the site actually serves: a 1280w webp for the featured
 * frame and a 480w webp for the thumb strip. The source PNGs are ~700KB each —
 * shipping four of them twice over would be most of the page's weight.
 *
 * The comet-tab mark's site geometry lives in src/components/CometMark.tsx; the
 * social card is generated locally (scripts/gen-og.ts). Derivatives are
 * committed so the site deploys without this script or the chrome repo.
 *
 *   bun run sync   (needs cwebp — `brew install webp`)
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const screenshotsFrom = join(siteRoot, "..", "chrome", "docs", "screenshots");
const screenshotsTo = join(siteRoot, "public", "screenshots");

mkdirSync(screenshotsTo, { recursive: true });

const kb = (path: string) => Math.round(statSync(path).size / 1024);

for (const file of readdirSync(screenshotsFrom).sort()) {
  if (!file.endsWith(".png")) continue;
  const from = join(screenshotsFrom, file);
  const base = file.replace(/\.png$/, "");
  const full = join(screenshotsTo, `${base}.webp`);
  const small = join(screenshotsTo, `${base}-sm.webp`);

  execFileSync("cwebp", ["-quiet", "-q", "82", "-resize", "1280", "0", from, "-o", full]);
  execFileSync("cwebp", ["-quiet", "-q", "78", "-resize", "480", "0", from, "-o", small]);
  console.log(`${file} (${kb(from)}KB) -> ${base}.webp ${kb(full)}KB · ${base}-sm.webp ${kb(small)}KB`);
}
