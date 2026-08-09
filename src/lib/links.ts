/**
 * Download contract with the extension repo (chrome/docs/website-brief.md):
 * hotlink only these stable URLs — never hardcode a version number anywhere.
 */
export const LINKS = {
  /**
   * Primary download. The signed CRX is still a release asset, but Chrome
   * refuses drag-and-drop CRX installs without a Web Store publisher proof
   * (CRX_REQUIRED_PROOF_MISSING) — so the unpacked ZIP is the only self-hosted
   * install that works. When the listing clears review, `store` takes over.
   */
  zip: "https://github.com/gusnips/tabrunner/releases/latest/download/tabrunner-latest-chrome.zip",
  releases: "https://github.com/gusnips/tabrunner/releases/latest",
  repo: "https://github.com/gusnips/tabrunner",
  issues: "https://github.com/gusnips/tabrunner/issues",
  // Legal docs render in-site (synced from the chrome repo by `bun run sync:legal`).
  privacy: "/privacy",
  terms: "/terms",
  mcpDocs: "https://github.com/gusnips/tabrunner/blob/main/docs/mcp.md",
  /** Live once the listing is approved; until then the CRX is the primary install. */
  store: "https://chromewebstore.google.com/detail/gkblgkcofolbpcbafkdhiihfbpjhdpgh",
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
