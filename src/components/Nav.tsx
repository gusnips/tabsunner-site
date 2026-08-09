import { useTranslation } from "react-i18next";
import i18n, { SUPPORTED_LANGUAGES, type SupportedLanguage } from "../i18n";
import { LINKS } from "../lib/links";
import { CometMark } from "./CometMark";

/**
 * The page's own browser chrome: favicon + wordmark on the left, an omnibox
 * pill in the middle, and the actions a chrome bar would carry on the right —
 * including the one we want taken (Download gets the glow; see DESIGN.md's
 * Glow-Means-Live rule: it's the primary action).
 */
export function Nav() {
  const { t } = useTranslation();

  const switchLanguage = (lng: SupportedLanguage) => {
    void i18n.changeLanguage(lng);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-field-600/50 bg-field-900/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-ion-400">
          <CometMark size={26} />
          <span className="hidden font-display text-sm font-semibold tracking-wide text-star-100 sm:block">
            TabRunner
          </span>
        </a>

        {/* omnibox */}
        <div className="mx-auto hidden items-center gap-2 rounded-full border border-field-600/70 bg-field-800/80 px-4 py-1.5 md:flex">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="size-3.5 text-star-500"
            aria-hidden="true"
          >
            <rect x="5" y="10" width="14" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
          <span className="font-mono text-xs text-star-500">tabrunner.app</span>
        </div>

        <nav className="ml-auto hidden items-center gap-6 text-sm text-star-300 md:flex md:ml-0">
          <a href="#features" className="transition-colors hover:text-star-100">
            {t("nav.features")}
          </a>
          <a href="#install" className="transition-colors hover:text-star-100">
            {t("nav.install")}
          </a>
          <a href="#privacy" className="transition-colors hover:text-star-100">
            {t("nav.privacy")}
          </a>
          <a
            href={LINKS.repo}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-star-100"
          >
            {t("nav.github")}
          </a>
        </nav>

        <div
          role="group"
          aria-label={t("nav.languageLabel")}
          className="flex items-center rounded-full border border-field-600/70 p-0.5 font-mono text-[11px]"
        >
          {SUPPORTED_LANGUAGES.map((lng) => (
            <button
              key={lng}
              type="button"
              onClick={() => switchLanguage(lng)}
              aria-pressed={i18n.language === lng}
              className={`rounded-full px-2 py-1 transition-colors ${
                i18n.language === lng
                  ? "bg-field-600 text-ion-300"
                  : "text-star-500 hover:text-star-300"
              }`}
            >
              {lng === "en-US" ? "EN" : lng === "pt-BR" ? "PT" : "ES"}
            </button>
          ))}
        </div>

        <a
          href={LINKS.crx}
          className="rounded-full bg-ion-500 px-4 py-2 text-sm font-semibold text-field-950 shadow-[0_0_24px_-4px] shadow-ion-500/50 transition-all hover:bg-ion-400 hover:shadow-ion-400/60"
        >
          {t("nav.download")}
        </a>
      </div>
    </header>
  );
}
