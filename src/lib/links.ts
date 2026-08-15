/**
 * Download contract with the extension repo (chrome/docs/website-brief.md):
 * hotlink only these stable URLs — never hardcode a version number anywhere.
 */
export const LINKS = {
  /**
   * The secondary path since the store listing went live (2026-08-15): a
   * developer-mode install for people who'd rather not use the store or want to
   * run the source build. Same extension ID as the store item, so the two can't
   * be installed side by side. There is no CRX and never will be — Chrome
   * installs those only through the store's own flow.
   */
  zip: "https://github.com/tabrunner/tabrunner/releases/latest/download/tabrunner-latest-chrome.zip",
  releases: "https://github.com/tabrunner/tabrunner/releases/latest",
  repo: "https://github.com/tabrunner/tabrunner",
  issues: "https://github.com/tabrunner/tabrunner/issues",
  license: "https://github.com/tabrunner/tabrunner/blob/main/LICENSE",
  // Legal docs render in-site (synced from the chrome repo by `bun run sync:legal`).
  privacy: "/privacy",
  terms: "/terms",
  mcpDocs: "https://github.com/tabrunner/tabrunner/blob/main/docs/mcp.md",
  /**
   * Live since 2026-08-15, and the primary CTA everywhere. Link the *listing*,
   * never the CRX behind it: Chrome's update service
   * (`clients2.google.com/service/update2/crx`) does serve the store-signed
   * build, but it needs a `prodversion` (a hardcoded Chrome version), redirects
   * to a per-release opaque blob URL, and is an internal update channel Google
   * doesn't support for redistribution.
   */
  store: "https://chromewebstore.google.com/detail/tabrunner/ilnohobdcigbmlikjbkdpbkhciephdle",
} as const;

export const CHROMIUM_BROWSERS = ["Chrome", "Brave", "Edge", "Arc", "Opera", "Vivaldi"] as const;

export const PROVIDER_PRESETS = [
  "Anthropic",
  "OpenAI",
  "Kimi",
  "Z.ai",
  "Qwen",
  "DeepSeek",
  "Gemini",
  "OpenRouter",
  "Groq",
  "Mistral",
  "xAI",
  "Ollama",
] as const;
