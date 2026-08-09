import { useTranslation } from "react-i18next";
import { PROVIDER_PRESETS } from "../lib/links";
import { Reveal } from "./Reveal";

/** One stroke weight, round caps, ion cyan — icons in the sky's own grammar. */
const ICONS = [
  // key — bring your own provider
  <path key="k" d="M14 10a4 4 0 1 0-4 4c.5 0 1-.1 1.4-.3l1.6 1.6V17h2v2h2v2h3v-3l-5.3-5.3c.2-.4.3-.9.3-1.7Z" />,
  // cursor click — trusted input
  <path key="c" d="m9 9 5 12 1.8-5.2L21 14 9 9Zm7 7 4 4" />,
  // tree — accessibility snapshot
  <path key="t" d="M12 3v4m0 0H7v4m5-4h5v4m-10 4v4m10-4v4M5 15h4m6 0h4" />,
  // shield check — guardrails
  <path key="s" d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Zm-2.5 9.5 2 2 3.5-4" />,
  // plug bridge — MCP
  <path key="p" d="M9 7V3m6 4V3M7 7h10v4a5 5 0 0 1-10 0V7Zm5 9v5" />,
  // drive off — no server
  <path key="d" d="M4 6h16v6H4V6Zm0 6 2 6h12l2-6M7.5 9h.01M3 3l18 18" />,
];

/**
 * The feature constellation — varied spans instead of a uniform card grid;
 * the providers card carries the real preset list as proof.
 */
export function Features() {
  const { t } = useTranslation();
  const items = t("features.items", { returnObjects: true }) as Array<{
    title: string;
    body: string;
  }>;
  const spans = [
    "sm:col-span-2 lg:col-span-4",
    "sm:col-span-2 lg:col-span-2",
    "sm:col-span-2 lg:col-span-2",
    "sm:col-span-2 lg:col-span-4",
    "sm:col-span-2 lg:col-span-3",
    "sm:col-span-2 lg:col-span-3",
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="max-w-[20ch] font-display text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-4xl">
          {t("features.title")}
        </h2>
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-star-300">
          {t("features.sub")}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80} className={spans[i]}>
            <article className="flex h-full flex-col rounded-2xl border border-field-500/60 bg-field-800/60 p-6 backdrop-blur-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-7 text-ion-400"
                aria-hidden="true"
              >
                {ICONS[i]}
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-star-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-star-300">{item.body}</p>
              {i === 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {PROVIDER_PRESETS.map((preset) => (
                    <li
                      key={preset}
                      className="rounded-md border border-field-500/60 px-2 py-0.5 font-mono text-[11px] text-star-300"
                    >
                      {preset}
                    </li>
                  ))}
                  <li className="rounded-md border border-ion-500/40 px-2 py-0.5 font-mono text-[11px] text-ion-300">
                    {t("features.providersMore")}
                  </li>
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
