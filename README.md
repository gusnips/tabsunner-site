# tabrunner.app

Marketing and download site for [TabRunner](https://github.com/gusnips/tabrunner) — a Chromium
extension that lets an LLM drive your real browser. Static site, deployed on its own cadence,
independent of the extension repo.

One page, five sections: hero with a live simulated run → feature constellation → product
screenshots → install flight plan → the privacy data map. English, Português (Brasil) and
Español.

## Stack

Vite · React 19 · Tailwind CSS 4 · i18next · bun. No router, no backend, no analytics.

```bash
bun install
bun run dev      # http://localhost:5173
bun run build    # tsc --noEmit && vite build → dist/
bun run preview  # serve the built dist/
bun run check    # self-check for the run console's clock (src/components/runPhase.ts)
```

## Design and product context

Three documents own the decisions; read them before changing the surface:

- **`PRODUCT.md`** — who this is for, what may and may not be claimed, distribution reality.
- **`DESIGN.md`** — "The Comet Field": the palette, type ramp, named rules, component specs.
- **`.impeccable/surfaces/src-app-tsx.md`** — the surface brief for the landing page.

The direction contract also lives at the top of `src/App.tsx`. The short version:

- Two lights only — burn emerald for motion, telemetry amber for measurement. No third hue, and
  never the retired purple (nor the brief cyan).
- Glow means live. Static content sits flat; only running things and the primary action glow.
- Monospace is only ever data — time, tokens, commands, refs. Prose never wears mono.
- One authored moment (the mission line launching a comet). Sections do not animate in;
  content is visible at rest.
- Icons are authored SVG at one stroke weight — no emoji, no unicode glyphs.
- No invented proof: no testimonials, logos, download counts, or star counts.

## The download contract

`src/lib/links.ts` is the only place download URLs live, and they are **`releases/latest`
aliases only** — never a hardcoded version number, anywhere. The extension's CI publishes to
these three stable URLs:

| What | URL |
| --- | --- |
| Zip, loaded unpacked (primary CTA) | `releases/latest/download/tabrunner-latest-chrome.zip` |
| Release notes | `releases/latest` |

**There is no CRX, and there is no CRX link to wait for.** The extension stopped publishing one
in v0.2.3: Chrome only installs a CRX that arrives through the store's own flow, and the store
signs with a key only Google holds, so a self-signed CRX was refused
(`CRX_REQUIRED_PROOF_MISSING`) at one end and the store's own CRX has no hotlinkable URL at the
other. Chrome's update service (`clients2.google.com/service/update2/crx?...id=<extension id>`)
is not a distribution channel — it 404s for an unpublished item, and what it returns still won't
install from a web page. So the flip when the listing lands is **zip → the listing URL**
(`LINKS.store`, an *Add to Chrome* button), never zip → any CRX. Until then the store link is
plain text, not a dead button.

The install caveat still tells visitors the `.crx` on the releases page won't drag-and-drop
install — true for v0.2.2 and earlier, which still carry that asset. It retires with the store
flip, along with the "installs as a separate extension ID" caveat: the extension now pins its
manifest key to the store item's, so the zip and the store install share one ID.

## Assets

```bash
bun run sync           # screenshots from ../chrome → public/screenshots (webp, 2 sizes)
bun run og             # regenerate public/og.png (1200×630 social card)
bun run shoot [url]    # screenshot the running site, report horizontal overflow
```

- **Screenshots** are captured in the extension repo (`chrome/docs/screenshots/`) and derived
  here into a 1280w and a 480w webp. Derivatives are committed, so a deploy needs neither this
  script nor the sibling repo. Requires `cwebp` (`brew install webp`).
- **The social card** is authored here by `scripts/gen-og.ts` from the comet-tab geometry and
  the vendored OFL fonts in `assets/fonts/`. It is no longer synced from the extension.
- **The comet-tab mark** has one geometry, in `src/components/CometMark.tsx`, mirrored in
  `public/favicon.svg` and `scripts/gen-og.ts`. Change it in all three or in none.
- `scripts/shoot.ts` scrolls the whole page before capturing — a `fullPage` screenshot never
  scrolls on its own, so anything gated on scroll position would otherwise photograph blank.

> **Known gap:** the product screenshots are from the pre-rename build — the panel is branded
> "Regent"/"Regentry", in the retired purple, with the old crown mark. The site labels them as
> old-brand (`shots.note`), but they need retaking against the current build before the site is
> promoted. See `PRODUCT.md` → Evidence on Hand.

## i18n

`src/i18n/locales/en-US.ts` is the reference locale and its shape is the `Locale` type — the
other two files fail to typecheck if they drift. Language resolves from `?lang=` → localStorage
→ browser language, and the choice persists.

## Deploy

Push to `main` → GitHub Actions builds and deploys `dist/` to Cloudflare Pages
(`.github/workflows/deploy.yml`). Needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`
repository secrets, and a Pages project whose name matches `--project-name` in the workflow.
`tabrunner.app` attaches as the custom domain.
