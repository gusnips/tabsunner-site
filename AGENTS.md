# tabrunner.app — Agent Guide

Marketing/download site for **TabRunner**, a Chromium extension that lets an LLM drive your
_real_ browser — tabs, sessions, logged-in accounts — through any provider you choose (15
presets + any OpenAI/Anthropic-compatible endpoint, subscription sign-in or API key). You
describe a task in the side panel; the agent reads pages (accessibility-tree snapshots), clicks,
types and navigates with trusted CDP input until the job is done. Provider-agnostic, no relay,
no TabRunner server; an MCP bridge lets external clients (Claude Code, Kimi) drive it too. The
extension lives in the sibling repo `../chrome` — its `AGENTS.md` + `docs/agent/*.md` carry the
deep architecture.

## Commands

```bash
bun run dev      # vite dev server
bun run build    # tsc --noEmit && vite build → dist/  (this IS the gate — keep it green)
bun run sync     # pull product screenshots from ../chrome/docs/screenshots → public/screenshots (webp)
bun run og       # regenerate public/og.png (scripts/gen-og.ts)
bun run shoot    # screenshot the built site, overflow report → preview/shots/ (gitignored output)
```

Deploy: push to `main` fires `.github/workflows/deploy.yml` → Cloudflare Pages project
`tabrunner` (tabrunner.pages.dev). Secrets `CLOUDFLARE_ACCOUNT_ID` / `CLOUDFLARE_API_TOKEN` live
in GitHub. Downloads hotlink the extension repo's `releases/latest` aliases — never hardcode a
version.

## Conventions

- Vite + React 19 + Tailwind 4 + bun. TypeScript strict. No component library — hand-built
  sections in `src/components/`, one per section (Hero, Features, Screenshots, Install, Privacy,
  Footer, Nav, RunConsole, CometField, CometMark).
- **i18n:** en-US / pt-BR / es-ES, catalogs in `src/i18n/locales/*.ts` (typed off en-US).
  Browser language is the default; `?lang=` overrides; localStorage persists. Add keys to all
  three catalogs in the same edit. No user-visible string is a literal.
- **Brand:** DESIGN.md is the design system — read it before any visual work. Token scales live
  in `src/index.css` (`field-*` deep indigo grounds, `flare-*` comet-burn emerald = motion,
  `tel-*` amber = measurement, `star-*` text). Two Lights rule: only emerald and amber emit
  light; glow means live. The retired purple and the brief cyan must not come back.
- **The comet-tab mark** geometry is shared with the extension (`src/components/CometMark.tsx`
  ↔ `chrome/src/shared/logo.ts`) — the two must not drift; same for the OG composition
  (`scripts/gen-og.ts` ↔ `chrome/scripts/gen-icons.ts`).
- Fonts: Unbounded (display) / Figtree (body) / JetBrains Mono (telemetry), via
  `@fontsource-variable/*`; OFL TTFs for resvg in `assets/fonts/`.
- Prettier: 2-space, double quotes, semicolons, width 100.

## Product screenshots

`public/screenshots/*.webp` derive from the extension repo: `bun run shots` there stages the
four shots and runs this repo's sync. What each shows (keep the section's captions in step):

- `01-side-panel` — Wikipedia "Web browser" article with the side panel beside it, pre-task: the
  task typed in the composer, not yet sent. The panel is the product, not a browser takeover.
- `02-chat` — Wikipedia "Intelligent agent" with a finished run in the panel: user bubble, plan
  card (3/3), tool trace, the agent's summary; the "TabRunner is controlling this tab" badge on
  the page (deep-field pill, amber dot).
- `03-providers` — options page, Providers tab: Anthropic + OpenAI subscription rows and a
  DeepSeek API-key row, active provider in flare.
- `04-chat-2` — Hacker News front page with a second conversation and the floating status
  widget (TabRunner · task · +1 queued · Open · Hide).
