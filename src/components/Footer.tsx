import { useTranslation } from "react-i18next";
import { LINKS } from "../lib/links";
import { CometMark } from "./CometMark";
import { GithubMark } from "./GithubMark";

export function Footer() {
  const { t } = useTranslation();

  const productLinks = [
    { label: t("footer.download"), href: LINKS.zip },
    { label: t("install.releaseNotes"), href: LINKS.releases },
  ];
  // The store listing isn't live yet: plain text until it is, never a dead link.
  const storeNote = t("footer.storeSoon");
  const projectLinks = [
    { label: "GitHub", href: LINKS.repo },
    { label: t("footer.issues"), href: LINKS.issues },
    { label: t("footer.privacyLink"), href: LINKS.privacy, internal: true },
    { label: t("footer.termsLink"), href: LINKS.terms, internal: true },
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
            {/* The open-source claim belongs with the brand, and the icon does
                the recognizing — the columns to the right stay navigational. */}
            <a
              href={LINKS.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-star-300 transition-colors hover:text-flare-300"
            >
              <GithubMark size={16} />
              {t("footer.openSource")}
            </a>
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
                    {...("internal" in link ? {} : { target: "_blank", rel: "noreferrer" })}
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
          <a
            href={LINKS.license}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-star-300"
          >
            {t("footer.license")}
          </a>
          <span>{t("footer.copyright")}</span>
        </div>
      </div>
    </footer>
  );
}
