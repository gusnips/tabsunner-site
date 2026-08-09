---
name: tabrunner.app
description: Marketing/download site for TabRunner — an AI agent that drives your real browser. Tabs are comets.
colors:
  field-ground: "#070b16"
  field-deep: "#04060d"
  field-panel: "#0b1224"
  field-border: "#25325c"
  ion: "#22d3ee"
  ion-bright: "#67e8f9"
  ion-pale: "#a5f3fc"
  telemetry: "#fbbf24"
  telemetry-dim: "#fcd34d"
  starlight: "#e8eefb"
  star-dim: "#b9c6de"
  star-faint: "#8797ba"
typography:
  display:
    fontFamily: "Unbounded Variable, Figtree Variable, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.8vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    lineHeight: 1.6
  telemetry:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontFeature: "tnum"
rounded:
  panel: "16px"
  control: "12px"
  pill: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.ion}"
    textColor: "{colors.field-deep}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ion-bright}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.starlight}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.star-dim}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  card:
    backgroundColor: "{colors.field-panel}"
    textColor: "{colors.starlight}"
    rounded: "{rounded.panel}"
    padding: "24px"
  input-mission:
    backgroundColor: "{colors.field-panel}"
    textColor: "{colors.starlight}"
    rounded: "{rounded.panel}"
    padding: "8px"
---

# Design System: tabrunner.app

## Overview

**Creative North Star: "The Comet Field"**

The browser's tab strip is a night sky, and every task launches a comet: a tab in motion with an
ice-blue ion trail behind it. The site is the mission-control room for that sky — dark, quiet,
instrumented — where a visitor watches one run happen and believes it. The category default (a
glowing orb over a bento grid of icon cards, everything purple, copy that says "revolutionary")
is refused in full.

Density is low and cinematic up top, tightening into instrument panels (the run console, the
install flight plan) as the visitor descends. Motion is the material: comets cross the fixed
canvas field, telemetry ticks, and the one authored moment is a task launching a comet from the
hero's mission line. Everything decorative must be a comet, a star, a trail, or an instrument —
nothing else earns a place.

**Key Characteristics:**

- Deep-field indigo ground, never pure black; stars and comet trails carry the light.
- Ion cyan is the comet's tail — the color of *motion*, not of decoration.
- Telemetry amber measures: timers, token counters, live pulses. Amber means "the agent is working."
- Browser chrome is compositional material: the sticky top bar is a chrome bar (favicon, omnibox,
  actions); the screenshot viewer sits inside a browser frame; the brand mark is a tab in flight.
- Type does two jobs only — Unbounded speaks (display), JetBrains Mono measures (telemetry),
  Figtree explains (body).

## Colors

Drenched dark: the surface IS the night sky; cyan and amber are light sources inside it.

### Primary

- **Ion** (`#22d3ee`): comet trails, primary actions, links, active states. The color of things
  that move. Bright (`#67e8f9`) for hover and near-head trail; pale (`#a5f3fc`) for shimmer peaks.

### Secondary

- **Telemetry** (`#fbbf24`, dim `#fcd34d`): elapsed timers, token counts, the live pulse dot,
  "working" status verbs. Never decorative — if it's amber, it's measuring something.

### Neutral

- **Field Ground** (`#070b16`): page sky. **Field Deep** (`#04060d`): text on ion buttons, canvas
  backdrop. **Field Panel** (`#0b1224`): instrument glass. **Field Border** (`#25325c`): hairlines.
- **Starlight** (`#e8eefb`): primary text. **Star Dim** (`#b9c6de`): secondary text.
  **Star Faint** (`#8797ba`): captions, placeholders — tinted from the sky, never pure gray.

### Named Rules

**The Two Lights Rule.** Only two hues emit light on this page: cyan (motion) and amber
(measurement). Any third saturated hue is a bug, not a flourish.

**The No-Purple Rule.** The retired royal-purple brand (`#8b5cf6` family) must not appear in new
work. It survives only inside legacy product screenshots, which the site itself labels as
old-brand until the extension's redesign lands.

## Typography

**Display Font:** Unbounded (variable) — wide, rounded, cosmic; the comet's voice.
**Body Font:** Figtree (variable) — quiet geometric grotesk that explains without competing.
**Label/Mono Font:** JetBrains Mono (variable, tabular numerals for ticking values).

### Hierarchy

- **Display** (600, `clamp(2.1rem, 4.8vw, 3.6rem)`, 1.08, −0.02em): hero statement (two block
  lines, second in ion) and section headings (`text-3xl`–`4xl`).
- **Body** (400–500, 1–1.125rem, measure ≤62ch): explanatory copy.
- **Telemetry** (mono, `text-[10px]`–`text-sm`, uppercase tracking for labels, `tnum` for values):
  timers, counters, commands, status lines, badges.

### Named Rules

**The Measurement Rule.** Monospace is data: time, tokens, commands, URLs, key names — plus
entity labels in chip/label positions (browser names, provider names, version-free statuses),
the instrument-panel idiom. Running prose never wears mono.

## Layout

Full-bleed fixed canvas sky; content on one centered column (`max-w-6xl`, `px-4/6`) floating over
it. Sections alternate density: cinematic sparse (hero, privacy) against instrument-dense (run
console, flight plan). `py-24` section rhythm; more space above a heading than below it. Grid
children carry `min-w-0` — `text-balance` inflates intrinsic sizes and will burst a mobile track
without it. Mobile stacks: hero becomes headline → mission line → CTAs → console.

## Elevation & Depth

Depth is atmospheric: translucent field-panel fills over the sky, hairline field-border strokes,
and a soft cyan glow only around things that are *alive* — the run console, the primary CTA, the
selected screenshot. No drop-shadow stacking, no offset block shadows.

### Named Rules

**The Glow-Means-Live Rule.** A glow asserts activity. Static content sits flat on the sky; only
running things (or the one action we want taken) may glow.

## Shapes

- The **comet-tab**: a browser-tab silhouette (rounded top corners, flat bottom) with a cyan
  favicon dot and two speed trails — the brand mark, recurring from favicon to canvas comet heads
  to the screenshot frame's tab. Authored SVG, one geometry, comet-ice palette.
- Panels/cards: gently curved instrument glass (16px). Controls 12px. Pills for buttons, chips,
  status badges.

## Components

### Buttons

- **Shape:** pill (9999px).
- **Primary:** ion background, field-deep text, 12/24 padding, soft cyan glow (the Glow-Means-Live
  exception: it is the action we want taken). Hover brightens to ion-bright and lifts the glow.
- **Ghost:** transparent, field-border stroke, starlight text; hover strokes ion and tints text.

### Cards / Containers

- 16px radius, field-panel fill at 60–70% opacity over the sky, hairline field-border, no shadow
  at rest. The live run console adds the cyan aura and a pulsing amber dot.

### Inputs / Fields

- The **mission line**: 16px panel with inner padding, focus-within strokes ion; the submit
  control is a field-600 tile with mono label. Placeholder rotates through real example tasks.

### Navigation

- The page's own browser chrome: comet-tab favicon + wordmark left, omnibox pill
  (`tabrunner.app`, mono, lock glyph) center, text links + EN/PT/ES segmented switcher + primary
  Download right. Sticky, backdrop-blurred field-ground.

### Run Console (signature)

Simulated agent run, labelled "simulated demo": task header with live amber pulse, plan with
check/active/pending steps, mono tool-call lines, shimmer on the working verb, amber telemetry
footer (elapsed, tokens). One clock derives every state; reduced motion shows the finished run.

## Do's and Don'ts

### Do:

- **Do** make the sky respond: the mission line launches a comet; the pointer leaves an ion wake.
- **Do** show the product working: a labelled simulated run, real screenshots in a chrome frame.
- **Do** state hard truths in plain view: Chromium-only, sideload caveats, no server.
- **Do** keep telemetry in tabular numerals so ticking values never jitter.
- **Do** hold 4.5:1 contrast on the sky — secondary text is star-dim, never darker.

### Don't:

- **Don't** use the retired purple, gradient text, or glass blur as decoration.
- **Don't** invent proof: no testimonials, customer logos, download counts, or star counts.
- **Don't** offer dead download buttons for Firefox/Safari — say Chromium-only in words.
- **Don't** let any element glow that isn't live or the primary action.
- **Don't** use emoji or unicode glyphs as icons; icons are authored SVG in one stroke weight.
- **Don't** hardcode a version number anywhere — downloads are `releases/latest` aliases only.
