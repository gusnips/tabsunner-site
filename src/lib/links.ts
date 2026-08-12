/**
 * Download contract with the extension repo (chrome/docs/website-brief.md):
 * hotlink only these stable URLs — never hardcode a version number anywhere.
 */
export const LINKS = {
  /**
   * Primary download, and the only self-hosted install that works: Chrome
   * installs a CRX only through the store's own flow, so the extension stopped
   * publishing one after v0.2.3. When the listing clears review, `store` takes
   * over — there is no CRX URL to move to, now or later.
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
  /** Live once the listing is approved; until then rendered as plain text, not a dead button. */
  store: "https://chromewebstore.google.com/detail/ilnohobdcigbmlikjbkdpbkhciephdle",
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
