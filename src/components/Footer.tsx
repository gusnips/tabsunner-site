import { useTranslation } from "react-i18next";
import { LINKS } from "../lib/links";
import { CometMark } from "./CometMark";

export function Footer() {
  const { t } = useTranslation();

  const productLinks = [
    { label: t("footer.download"), href: LINKS.crx },
    { label: t("install.releaseNotes"), href: LINKS.releases },
  ];
  // The store listing is in review: plain text until it's live, never a dead link.
  const storeNote = t("footer.storeSoon");
  const projectLinks = [
    { label: "GitHub", href: LINKS.repo },
    { label: t("footer.issues"), href: LINKS.issues },
    { label: t("footer.privacyLink"), href: LINKS.privacy },
    { label: t("footer.termsLink"), href: LINKS.terms },
    { label: t("footer.mcpDocs"), href: LINKS.mcpDocs },
  ];

  return (
    <footer className="border-t border-field-600/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5 text-flare-400">
              <CometMark size={26} />
              <span className="font-display text-sm font-semibold tracking-wide text-star-100">
                TabRunner
              </span>
            </p>
            <p className="mt-3 max-w-[40ch] text-sm text-star-300">{t("footer.tagline")}</p>
            <p className="mt-4 font-mono text-xs text-star-500">{t("footer.chromium")}</p>
          </div>

          <nav aria-label={t("footer.productHeading")}>
            <p className="font-mono text-xs tracking-wider text-star-500 uppercase">
              {t("footer.productHeading")}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-star-300 transition-colors hover:text-flare-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="text-star-500">{storeNote}</li>
            </ul>
          </nav>

          <nav aria-label={t("footer.projectHeading")}>
            <p className="font-mono text-xs tracking-wider text-star-500 uppercase">
              {t("footer.projectHeading")}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-star-300 transition-colors hover:text-flare-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-field-600/50 pt-6 font-mono text-xs text-star-500">
          <span>{t("footer.license")}</span>
          <span>© 2026 Gus</span>
        </div>
      </div>
    </footer>
  );
}
