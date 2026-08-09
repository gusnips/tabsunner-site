---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

# Surface brief — tabrunner.app landing (`/`)

- **Mode:** Persuade. Visitor = AI power user / dev; success = understands in seconds, trusts, installs the CRX.
- **Direction:** "The Comet Field" — grounded candidate 4 (browser chrome as compositional material), seed f5e6e750, fused with user-pinned dark-cosmic energy and the user-chosen comet-ice palette (replaces retired royal purple). Direction contract: opening comment of `src/App.tsx`.
- **First viewport:** page-as-browser-chrome nav; two-block Unbounded headline ("You give the goal. / It runs the tabs."), mission line that launches a comet on submit, primary Download CTA (CRX `latest` alias), browser chips; simulated live run console on the right; fixed comet-field canvas behind all.
- **Sections:** features constellation (varied spans, providers card lists the real presets) → real screenshots in a chrome frame (thumb switcher; note labels them old-purple until extension redesign) → install "flight plan" (CRX 3 steps + plain caveats + zip fallback + CWS-in-review note) → "No ground station" privacy data map → footer.
- **Memorable moment:** submit the mission line → a comet-tab launches across the sky with an amber nucleus flash.
- **i18n:** en-US / pt-BR / es-ES, browser-language default, `?lang=` override, localStorage persistence, switcher in nav.
- **Constraints:** never hardcode a version (latest-alias URLs only, see `src/lib/links.ts`); state CRX caveats and Chromium-only plainly; no invented proof; screenshots synced from `../chrome` via `bun run sync`.
- **Open:** product screenshots are pre-rename ("Regent"/"Regentry", old purple, crown mark) and need retaking against the current build — the site labels them old-brand until then. Extension redesign will adopt this palette + the comet-tab mark (geometry: `src/components/CometMark.tsx`). CF Pages project name in `.github/workflows/deploy.yml` may need adjusting to the real dashboard project.
