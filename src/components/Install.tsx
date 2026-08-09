import { useTranslation } from "react-i18next";
import { LINKS } from "../lib/links";

/**
 * The flight plan — install steps as a launch sequence, caveats said plainly
 * beside them. Only stable `releases/latest` URLs are linked; no version
 * numbers anywhere (the download contract in chrome/docs/website-brief.md).
 * One path only: Chrome rejects sideloaded CRX files, so the ZIP loaded
 * unpacked is the install until the store listing is live.
 */
export function Install() {
  const { t } = useTranslation();
  const steps = t("install.steps", { returnObjects: true }) as string[];
  const caveats = t("install.caveats", { returnObjects: true }) as string[];

  return (
    <section id="install" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <h2 className="max-w-[20ch] font-display text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-4xl">
        {t("install.title")}
      </h2>
      <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-star-300">
        {t("install.sub")}
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* launch sequence */}
        <div className="flex h-full min-w-0 flex-col rounded-2xl border border-field-500/60 bg-field-800/60 p-6 backdrop-blur-sm sm:p-8">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-star-100">{t("install.loadTitle")}</h3>
            <span className="rounded-full bg-flare-500/15 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-flare-300 uppercase">
              {t("install.badge")}
            </span>
          </div>

          <ol className="mt-6 space-y-0">
            {steps.map((step, i) => (
              <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
                {/* the trajectory line connecting stages */}
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-8 left-[15px] h-[calc(100%-2rem)] w-px bg-gradient-to-b from-flare-500/60 to-flare-500/10"
                  />
                )}
                <span className="tnum z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-flare-500/50 bg-field-900 font-mono text-sm text-flare-300">
                  {i + 1}
                </span>
                <p className="pt-1.5 text-sm leading-relaxed text-star-300">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={LINKS.zip}
              className="inline-flex items-center gap-2 rounded-full bg-flare-500 px-6 py-3 font-semibold text-field-950 shadow-[0_0_32px_-4px] shadow-flare-500/50 transition-all hover:bg-flare-400 hover:shadow-flare-400/60"
            >
              {t("install.download")}
            </a>
            <a
              href={LINKS.releases}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-field-500 px-5 py-3 text-sm font-semibold text-star-100 transition-colors hover:border-flare-500/60 hover:text-flare-300"
            >
              {t("install.releaseNotes")}
            </a>
          </div>

          {/* prose, so not mono — see DESIGN.md's Measurement Rule */}
          <p className="mt-auto pt-8 text-xs leading-relaxed text-star-500">
            {t("install.storeNote")}
          </p>
        </div>

        {/* caveats — said plainly */}
        <div className="h-full min-w-0 rounded-2xl border border-field-500/60 bg-field-800/40 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-star-100">{t("install.caveatsTitle")}</h3>
          <ul className="mt-5 space-y-4">
            {caveats.map((caveat) => (
              <li key={caveat} className="flex gap-3 text-sm leading-relaxed text-star-300">
                <span
                  aria-hidden="true"
                  className="mt-[7px] size-1.5 shrink-0 rotate-45 bg-flare-400"
                />
                {caveat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
