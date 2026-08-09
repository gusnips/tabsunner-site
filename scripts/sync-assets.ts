/**
 * Syncs product screenshots from the sibling extension repo (`../chrome`).
 * The comet-tab mark's site geometry lives in src/components/CometMark.tsx;
 * the social card is generated locally (scripts/gen-og.ts) — only the
 * screenshots come from the extension repo, and they get retaken there.
 * Copies are committed so the site deploys independently of the chrome repo.
 */
import { cpSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const chromeRoot = join(siteRoot, "..", "chrome");

const copies: Array<{ from: string; to: string }> = [];

const screenshotsFrom = join(chromeRoot, "docs", "screenshots");
const screenshotsTo = join(siteRoot, "public", "screenshots");
mkdirSync(screenshotsTo, { recursive: true });
for (const file of readdirSync(screenshotsFrom)) {
  if (file.endsWith(".png")) {
    copies.push({ from: join(screenshotsFrom, file), to: join(screenshotsTo, file) });
  }
}

for (const { from, to } of copies) {
  cpSync(from, to);
  console.log(`synced ${from} -> ${to}`);
}
