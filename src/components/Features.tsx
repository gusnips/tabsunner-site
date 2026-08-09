import { useTranslation } from "react-i18next";
import { PROVIDER_PRESETS } from "../lib/links";

/**
 * One stroke weight (1.5), round caps, ion cyan — icons in the sky's own
 * grammar. Drawn on the 24-grid and checked at 28px: an icon that isn't
 * readable at its shipped size is decoration, not an icon.
 */
const ICONS = [
  // key — bring your own provider
  <g key="k">
    <circle cx="8.5" cy="15.5" r="4.5" />
    <path d="m11.7 12.3 8.3-8.3M17 7l2.5 2.5M14.5 9.5 17 12" />
  </g>,
  // pointer with click rays — trusted input
  <g key="c">
    <path d="m9 8.5 8 3.5-3.4 1.6L12 17 9 8.5Z" />
    <path d="M6 4.5 7 6M12.5 4l-.7 1.8M4.5 10.5l1.8-.6" />
  </g>,
  // node tree — the accessibility snapshot
  <g key="t">
    <rect x="9" y="3" width="6" height="3.5" rx="1" />
    <rect x="3.5" y="16.5" width="6" height="3.5" rx="1" />
    <rect x="14.5" y="16.5" width="6" height="3.5" rx="1" />
    <path d="M12 6.5v4M6.5 16.5v-2.8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2.8" />
  </g>,
  // shield with a check — guardrails
  <g key="s">
    <path d="M12 3.2 5.5 5.8v4.9c0 4.2 2.7 7.9 6.5 9.1 3.8-1.2 6.5-4.9 6.5-9.1V5.8L12 3.2Z" />
    <path d="m9.2 11.6 2 2 3.6-4" />
  </g>,
  // two connectors meeting — the MCP bridge
  <g key="p">
    <path d="M3.5 12h4M16.5 12h4" />
    <rect x="7.5" y="8" width="4" height="8" rx="1.2" />
    <rect x="12.5" y="9.5" width="4" height="5" rx="1.2" />
  </g>,
  // server rack, struck through — no server
  <g key="d">
    <rect x="3.5" y="4.5" width="17" height="6" rx="1.5" />
    <rect x="3.5" y="13.5" width="17" height="6" rx="1.5" />
    <path d="M7 7.5h.01M7 16.5h.01" />
    <path d="m3 21 18-18" />
  </g>,
];

/**
 * The feature constellation — varied spans instead of a uniform card grid.
 * Cards that can show evidence do: the providers card carries the real preset
 * list, the snapshot card the real accessibility-tree line the model reads.
 */
export function Features() {
  const { t } = useTranslation();
  const items = t("features.items", { returnObjects: true }) as Array<{
    title: string;
    body: string;
  }>;
  /*
   * Varied spans, and the two cards carrying evidence get the wide track so
   * their neighbour isn't left as a stretched void. sm runs full / pair /
   * pair / full — six cards over two columns with no holes.
   */
  const spans = [
    "sm:col-span-2 lg:col-span-4",
    "lg:col-span-2",
    "lg:col-span-4",
    "lg:col-span-2",
    "lg:col-span-3",
    "sm:col-span-2 lg:col-span-3",
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <h2 className="max-w-[20ch] font-display text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-4xl">
        {t("features.title")}
      </h2>
      <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-star-300">
        {t("features.sub")}
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {items.map((item, i) => (
          <article
            key={item.title}
            className={`flex h-full min-w-0 flex-col rounded-2xl border border-field-500/60 bg-field-800/60 p-6 backdrop-blur-sm ${spans[i]}`}
          >
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
            {i === 2 && (
              // the real thing the model reads — proof beats description
              <pre className="mt-4 overflow-x-auto rounded-lg border border-field-500/60 bg-field-900/70 px-3 py-2 font-mono text-[11px] leading-relaxed text-star-300">
                <code>
                  <span className="text-ion-300">[ref=e12]</span> button &quot;Submit&quot;
                  {"\n"}
                  <span className="text-ion-300">[ref=e13]</span> textbox &quot;Email&quot;
                </code>
              </pre>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
