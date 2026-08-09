/**
 * Visual inspection for the extension rebuild: loads the built extension
 * (../chrome/dist/chrome-mv3 — run `bun run build` there first) into the
 * installed Chrome and screenshots the options page and side panel in light
 * and dark. Uses puppeteer-core (no browser download).
 *
 *   bun run scripts/shoot-ext.ts
 */
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const extPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
  "chrome",
  "dist",
  "chrome-mv3",
);
const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "preview", "shots");
mkdirSync(outDir, { recursive: true });

// Branded Chrome ignores --load-extension in headless; Chrome for Testing doesn't.
const CFT =
  "/Users/gus/.cache/puppeteer/chrome/mac-151.0.7922.47/chrome-mac-x64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";
const executablePath = existsSync(CFT)
  ? CFT
  : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: [`--disable-extensions-except=${extPath}`, `--load-extension=${extPath}`],
});

// The extension id falls out of its service worker target.
let extId = "";
for (let i = 0; i < 50 && !extId; i++) {
  const sw = browser.targets().find((t) => t.type() === "service_worker");
  const match = sw?.url().match(/^chrome-extension:\/\/([^/]+)\//);
  if (match) extId = match[1];
  else await new Promise((r) => setTimeout(r, 100));
}
if (!extId) {
  console.error("extension service worker never appeared — is the build current?");
  process.exit(1);
}
console.log(`extension id: ${extId}`);

async function shoot(page_: string, name: string, dark: boolean) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: dark ? "dark" : "light" },
  ]);
  await page.goto(`chrome-extension://${extId}/${page_}`, { waitUntil: "networkidle0" });
  await page.evaluate(() => void document.fonts.ready);
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: join(outDir, `${name}.png`) });
  console.log(`${name}: shot`);
  await page.close();
}

for (const dark of [false, true]) {
  const mode = dark ? "dark" : "light";
  await shoot("options.html", `ext-options-${mode}`, dark);
  await shoot("sidepanel.html", `ext-sidepanel-${mode}`, dark);
}
await browser.close();
