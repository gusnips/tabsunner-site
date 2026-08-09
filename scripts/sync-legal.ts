/**
 * Syncs the legal docs (PRIVACY.md, TERMS.md) from the extension repo's raw
 * GitHub URLs into src/legal/. The chrome repo stays the single source of
 * truth; the site renders the synced copies at /privacy and /terms, so the
 * pages work offline from GitHub and add no runtime fetch.
 *
 * The synced files are committed — deploys (CF Pages via GH Actions) build
 * without network access to GitHub, same convention as `bun run sync`.
 *
 *   bun run sync:legal
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(siteRoot, "src", "legal");

const DOCS = {
  privacy: "https://raw.githubusercontent.com/gusnips/tabrunner/main/PRIVACY.md",
  terms: "https://raw.githubusercontent.com/gusnips/tabrunner/main/TERMS.md",
} as const;

mkdirSync(outDir, { recursive: true });

for (const [name, url] of Object.entries(DOCS)) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  const body = await res.text();
  const out = join(outDir, `${name}.md`);
  writeFileSync(out, body);
  console.log(`${name}.md <- ${url} (${Math.round(body.length / 1024)}KB)`);
}
