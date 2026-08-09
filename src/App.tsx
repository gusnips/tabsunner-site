/**
 * DIRECTION CONTRACT — tabrunner.app, "The Comet Field" (see DESIGN.md)
 *
 * THESIS: Tabs are comets — the browser's tab strip is a night sky, and every
 * task launches a tab that streaks across it with an emerald burn trail.
 * Refuses the category default (glowing orb hero + uniform bento of icon cards).
 * OWN-WORLD: deep-field indigo ground (#070b16 family); only two lights —
 * burn emerald (#10b981 family) for motion, telemetry amber (#fbbf24) for
 * measurement; Unbounded display / Figtree body / JetBrains Mono telemetry;
 * the comet-tab glyph recurs from favicon to canvas to screenshot frame.
 * STORY: a visitor sees a task enter the mission line, a comet leave it, and
 * a (labelled, simulated) run tick beside them — they understand in seconds
 * that an AI drives *their* browser, visibly, under their control — and they
 * download the CRX.
 * FIRST VIEWPORT: the page's own browser-chrome bar (comet favicon, omnibox,
 * glowing Download action); headline left with mission line and CTAs; live
 * run console right; comet field canvas behind everything.
 * FORM: grounded candidate 4 — browser chrome as compositional material —
 * assigned by seed f5e6e750 and fused with the user-pinned dark-cosmic
 * energy and the user-chosen comet-ice palette (replacing the retired
 * royal purple; extension redesign follows this palette).
 */

import { CometField } from "./components/CometField";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Install } from "./components/Install";
import { Nav } from "./components/Nav";
import { Privacy } from "./components/Privacy";
import { Screenshots } from "./components/Screenshots";

export function App() {
  return (
    <>
      <CometField />
      <Nav />
      <main id="main">
        <Hero />
        <Features />
        <Screenshots />
        <Install />
        <Privacy />
      </main>
      <Footer />
    </>
  );
}
