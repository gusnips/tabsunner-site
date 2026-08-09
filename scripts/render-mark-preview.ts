/**
 * Preview renderer for brand-mark candidates. Renders each candidate as a
 * contact sheet (on-tile 96px, bare glyph at 32px and 16px) so legibility is
 * judged at real icon sizes. Uses the extension repo's resvg — the same
 * rasterizer `bun run icons` uses there.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "../../chrome/node_modules/@resvg/resvg-js/index.js";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "preview");
mkdirSync(outDir, { recursive: true });

const TILE_DEFS = `<defs>
  <linearGradient id="tile" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0e1a33" />
    <stop offset="1" stop-color="#070b16" />
  </linearGradient>
</defs>`;

const tile = (inner: string) => `<rect width="48" height="48" rx="11" fill="url(#tile)" />
  <rect width="47" height="47" x="0.5" y="0.5" rx="10.5" fill="none" stroke="#22d3ee" stroke-opacity="0.35" />
  ${inner}`;

/** tab silhouette: rounded top corners, flat bottom. */
const tab = (x: number, y: number, w: number, h: number, r: number, fill: string) =>
  `<path d="M ${x} ${y + h} L ${x} ${y + r} Q ${x} ${y} ${x + r} ${y} L ${x + w - r} ${y} Q ${x + w} ${y} ${x + w} ${y + r} L ${x + w} ${y + h} Z" fill="${fill}" />`;

const candidates: Record<string, string> = {
  // A — comet-tab, discrete bar trails (evolution of the current mark)
  "a-bars":
    tab(23, 17, 18, 13, 3.5, "#e8eefb") +
    `<circle cx="27" cy="21.5" r="1.8" fill="#06b6d4" />` +
    `<rect x="7" y="19.5" width="12" height="3.25" rx="1.625" fill="#22d3ee" />` +
    `<rect x="10" y="26.25" width="9" height="3.25" rx="1.625" fill="#67e8f9" />`,
  // B — comet-tab, tapered ion streaks
  "b-streak":
    `<path d="M 23 19.5 L 5 16 L 23 23 Z" fill="#67e8f9" opacity="0.9" />` +
    `<path d="M 23 24 L 8 30.5 L 23 27.5 Z" fill="#22d3ee" opacity="0.6" />` +
    tab(23, 17, 18, 13, 3.5, "#e8eefb") +
    `<circle cx="27" cy="21.5" r="1.8" fill="#06b6d4" />`,
  // C — run-tab: play glyph inside the tab, one trail bar
  "c-run":
    `<rect x="5" y="22.5" width="9" height="3" rx="1.5" fill="#22d3ee" opacity="0.8" />` +
    tab(17, 16, 21, 15, 4, "#e8eefb") +
    `<path d="M 26.5 20.5 L 33 23.5 L 26.5 26.5 Z" fill="#070b16" />`,
};

for (const [name, glyph] of Object.entries(candidates)) {
  const sheet = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="120" viewBox="0 0 320 120">
  ${TILE_DEFS}
  <rect width="320" height="120" fill="#04060d" />
  <g transform="translate(24, 12) scale(2)">${tile(glyph)}</g>
  <g transform="translate(170, 44) scale(0.6667)">${glyph}</g>
  <g transform="translate(250, 48) scale(0.3333)">${glyph}</g>
</svg>`;
  const resvg = new Resvg(sheet, { fitTo: { mode: "width", value: 640 } });
  writeFileSync(join(outDir, `mark-${name}.png`), resvg.render().asPng());
  console.log(`rendered mark-${name}.png`);
}
