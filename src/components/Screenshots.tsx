import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CometMark } from "./CometMark";
import { Reveal } from "./Reveal";

const SHOTS = ["01-side-panel.png", "02-chat.png", "03-providers.png", "04-chat-2.png"];

/**
 * Real product screenshots in a browser-chrome frame — the frame's tab carries
 * the comet mark, which is the site's thesis in miniature. Thumbs swap the
 * featured shot; captions come from the locale.
 */
export function Screenshots() {
  const { t } = useTranslation();
  const captions = t("shots.captions", { returnObjects: true }) as string[];
  const [selected, setSelected] = useState(1); // mid-run shot is the most alive

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="max-w-[20ch] font-display text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-4xl">
          {t("shots.title")}
        </h2>
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-star-300">{t("shots.sub")}</p>
      </Reveal>

      <Reveal delay={120}>
        <figure className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-field-500/60">
            {/* chrome bar of the frame */}
            <div className="flex items-center gap-3 border-b border-field-600/60 bg-field-800 px-4 py-2.5">
              <span className="flex items-center gap-1.5 rounded-t-md border border-field-500/70 bg-field-700 px-2.5 py-1">
                <CometMark size={12} />
                <span className="font-mono text-[10px] text-star-300">TabRunner</span>
              </span>
              <span className="hidden rounded-full bg-field-900 px-3 py-1 font-mono text-[10px] text-star-500 sm:block">
                chrome-extension://tabrunner
              </span>
            </div>
            <img
              src={`/screenshots/${SHOTS[selected]}`}
              alt={captions[selected]}
              width={1280}
              height={800}
              className="block w-full"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4">
            <span className="text-sm text-star-300">{captions[selected]}</span>
            <span className="font-mono text-xs text-star-500 tnum">
              {selected + 1} / {SHOTS.length}
            </span>
          </figcaption>
        </figure>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {SHOTS.map((shot, i) => (
            <button
              key={shot}
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
              aria-label={captions[i]}
              className={`overflow-hidden rounded-lg border bg-field-800 transition-all ${
                selected === i
                  ? "border-ion-500/70"
                  : "border-field-600/60 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={`/screenshots/${shot}`}
                alt=""
                width={320}
                height={200}
                className="block w-full"
                loading="lazy"
              />
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs text-star-500">{t("shots.note")}</p>
      </Reveal>
    </section>
  );
}
