# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

AI power users and developers: people who already pay for (or self-host) an LLM provider, are
comfortable installing an extension via `chrome://extensions`, and want an agent to do real work in
the browser they actually use — with their own tabs, sessions, and logins.

## Product Purpose

TabRunner is a Chromium extension that lets an LLM drive the user's **real** browser — not a
sandbox. The user describes a task in the side panel; TabRunner reads pages (accessibility-tree
snapshots), clicks and types (trusted input via the Chrome DevTools Protocol), and navigates until
the job is done. Tagline: **"You give the goal. It runs the tabs."** (2026-08, user-confirmed;
replaces "You decide. It does the legwork." — the extension README/OG still carry the old line
until the redesign). Success for the site: a visitor
understands what it is in seconds, trusts it enough to install, and completes the install.

## Positioning

Two claims a neighboring product cannot copy:

1. **It runs in your browser, not a sandbox** — it acts on the sites you're already logged into,
   with genuine trusted input events (CDP), not synthetic JS dispatches sites can ignore.
2. **Provider-agnostic by construction** — 15 presets plus any OpenAI/Anthropic-compatible
   endpoint; subscription sign-in (Anthropic, OpenAI, Kimi) or API key. No TabRunner server, no
   relay, no account, no telemetry. Your key goes straight from the extension to your provider.

## Operating Context

- Distribution: GitHub Releases (`gusnips/tabrunner`) until the Chrome Web Store listing is
  approved (v0.1.0 withdrawn for resubmission with a new permission; store ID assigned:
  `gkblgkcofolbpcbafkdhiihfbpjhdpgh`). Primary CTA today is the signed CRX download; store link
  flips to primary once approved. The site must **never hardcode a version number** — only
  `releases/latest` aliases.
- Also drivable over MCP from Claude Code/Desktop or any MCP client (local daemon bridge).
- Chromium-only by design: Chrome, Brave, Edge, Arc, Opera, Vivaldi. Firefox/Safari have no
  `chrome.debugger` equivalent — say so, don't offer dead buttons.
- Extension UI is localized: English, Português (Brasil), Español; light/dark/OS theme.

## Capabilities and Constraints

- Site stack: Vite + React 19 + Tailwind CSS 4 + bun, static, deployed on its own cadence.
- Hard requirements from `chrome/docs/website-brief.md`: hotlink only the three stable release
  URLs (`tabrunner-latest.crx`, `tabrunner-latest-chrome.zip`, `releases/latest`); state the CRX
  caveats plainly (not-from-store warning, separate extension ID from the future store item, no
  auto-update); present the zip as fallback; link the privacy doc
  (`github.com/gusnips/tabrunner/blob/main/PRIVACY.md`) up front — an agent that drives your
  logged-in browser must answer the data question immediately.

## Brand Commitments

- Name: **TabRunner** ("it runs your tabs"). Mark: the **comet** — a body in motion with its
  trail; generated from `src/shared/logo.ts`, never hand-edited.
- Brand color (2026-08, user-confirmed): **comet-ice** — deep-space indigo ground, electric
  cyan/ice-blue comet trails (a comet's ion tail is blue), warm amber for live telemetry. This
  replaces the original royal-purple scale (`#8b5cf6` family still in the extension's
  `chrome/src/lib/theme.css` and current screenshots); the extension redesign will regenerate
  icons/OG from source in the new palette. Until then, product screenshots show the old brand.
- Voice: direct, technically honest, zero hype. No invented testimonials, customers, benchmarks,
  or pricing. Avoid the generic AI-hype SaaS feel (user-confirmed anti-vibe).

## Evidence on Hand

- `chrome/docs/screenshots/`: 4 real 1280×800 product shots (side panel, chat/run, providers,
  second chat).
- `chrome/docs/og.png`: 1200×630 social card, dark purple, "You decide. It does the legwork."
- `chrome/public/icon/`: comet tile PNGs (16–128).
- `chrome/README.md`, `chrome/docs/mcp.md`, `chrome/docs/store-listing.md`: copy source.
- `chrome/PRIVACY.md`: privacy policy (linked on GitHub).
- No testimonials, customer logos, usage numbers, or pricing exist — never fabricate them.

## Product Principles

1. Prove, don't claim — show the real product working; the privacy answer comes first, not last.
2. Honest distribution — install instructions state every caveat a sideloaded CRX carries.
3. No dark patterns of omission — Chromium-only is stated, not hidden behind dead buttons.
4. Playful but credible — the comet energy serves developers who read footnotes.
