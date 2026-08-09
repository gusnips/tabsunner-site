import { useTranslation } from "react-i18next";
import { LINKS } from "../lib/links";
import { Reveal } from "./Reveal";

/**
 * The flight plan — install steps as a launch sequence, caveats said plainly
 * beside them. Only stable `releases/latest` URLs are linked; no version
 * numbers anywhere (the download contract in chrome/docs/website-brief.md).
 */
export function Install() {
  const { t } = useTranslation();
  const steps = t("install.steps", { returnObjects: true }) as string[];
  const caveats = t("install.caveats", { returnObjects: true }) as string[];

  return (
    <section id="install" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="max-w-[20ch] font-display text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-4xl">
          {t("install.title")}
        </h2>
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-star-300">
          {t("install.sub")}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* launch sequence */}
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl border border-field-500/60 bg-field-800/60 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-star-100">{t("install.crxTitle")}</h3>
              <span className="rounded-full bg-ion-500/15 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-ion-300 uppercase">
                {t("install.crxBadge")}
              </span>
            </div>

            <ol className="mt-6 space-y-0">
              {steps.map((step, i) => (
                <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
                  {/* the trajectory line connecting stages */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-8 left-[15px] h-[calc(100%-2rem)] w-px bg-gradient-to-b from-ion-500/60 to-ion-500/10"
                    />
                  )}
                  <span className="tnum z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-ion-500/50 bg-field-900 font-mono text-sm text-ion-300">
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-star-300">{step}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={LINKS.crx}
                className="inline-flex items-center gap-2 rounded-full bg-ion-500 px-6 py-3 font-semibold text-field-950 shadow-[0_0_32px_-4px] shadow-ion-500/50 transition-all hover:bg-ion-400 hover:shadow-ion-400/60"
              >
                {t("install.downloadCrx")}
              </a>
              <a
                href={LINKS.releases}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-field-500 px-5 py-3 text-sm font-semibold text-star-100 transition-colors hover:border-ion-500/60 hover:text-ion-300"
              >
                {t("install.releaseNotes")}
              </a>
            </div>

            <details className="group mt-6 rounded-xl border border-field-600/60 bg-field-900/50 open:border-field-500">
              <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-star-100 transition-colors hover:text-ion-300">
                {t("install.zipTitle")}
              </summary>
              <div className="border-t border-field-600/60 px-4 py-3">
                <p className="text-sm leading-relaxed text-star-300">{t("install.zipSteps")}</p>
                <a
                  href={LINKS.zip}
                  className="mt-3 inline-block font-mono text-sm text-ion-300 underline decoration-ion-500/40 underline-offset-4 hover:text-ion-200"
                >
                  {t("install.downloadZip")}
                </a>
              </div>
            </details>

            <p className="mt-5 font-mono text-xs text-star-500">{t("install.storeNote")}</p>
          </div>
        </Reveal>

        {/* caveats — said plainly */}
        <Reveal delay={120}>
          <div className="h-full rounded-2xl border border-field-500/60 bg-field-800/40 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-star-100">{t("install.caveatsTitle")}</h3>
            <ul className="mt-5 space-y-4">
              {caveats.map((caveat) => (
                <li key={caveat} className="flex gap-3 text-sm leading-relaxed text-star-300">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] size-1.5 shrink-0 rotate-45 bg-ion-400"
                  />
                  {caveat}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
