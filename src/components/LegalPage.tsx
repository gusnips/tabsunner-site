/**
 * Legal doc pages (/privacy, /terms). The markdown is synced from the chrome
 * repo by `bun run sync:legal` (scripts/sync-legal.ts) and committed under
 * src/legal/ — the GitHub repo stays the single source of truth, the site
 * renders a static local copy.
 */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useTranslation } from "react-i18next";
import { CometMark } from "./CometMark";
import privacyMd from "../legal/privacy.md?raw";
import termsMd from "../legal/terms.md?raw";

const DOCS = { privacy: privacyMd, terms: termsMd } as const;

const GITHUB_BLOB = "https://github.com/tabrunner/tabrunner/blob/main/";

/**
 * The docs cross-link each other and the repo with relative paths
 * ([PRIVACY.md](PRIVACY.md), [LICENSE](LICENSE)). On the site, the two legal
 * docs resolve to their local routes; every other relative link goes to the
 * file on GitHub.
 */
function resolveHref(href: string): { href: string; external: boolean } {
  if (/^https?:\/\//.test(href)) return { href, external: true };
  const file = href.replace(/^\.\//, "");
  if (file === "PRIVACY.md") return { href: "/privacy", external: false };
  if (file === "TERMS.md") return { href: "/terms", external: false };
  return { href: GITHUB_BLOB + file, external: true };
}

export function LegalPage({ doc }: { doc: keyof typeof DOCS }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-field-900">
      <header className="border-b border-field-600/50">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-5 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 text-flare-400">
            <CometMark size={24} />
            <span className="font-display text-sm font-semibold tracking-wide text-star-100">
              TabRunner
            </span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-star-500 uppercase transition-colors hover:text-flare-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5"
              aria-hidden="true"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            {t("legal.back")}
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="font-display text-3xl font-semibold text-star-100 sm:text-4xl">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="mt-12 text-xl font-semibold text-star-100">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-8 text-base font-semibold text-star-100">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="mt-4 leading-relaxed text-star-300">{children}</p>
            ),
            a: ({ href, children }) => {
              const resolved = resolveHref(href ?? "");
              return (
                <a
                  href={resolved.href}
                  {...(resolved.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="font-medium text-flare-300 underline decoration-flare-500/40 underline-offset-4 transition-colors hover:text-flare-200"
                >
                  {children}
                </a>
              );
            },
            strong: ({ children }) => (
              <strong className="font-semibold text-star-100">{children}</strong>
            ),
            ul: ({ children }) => (
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-star-300 marker:text-flare-400">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="mt-4 list-decimal space-y-2 pl-6 leading-relaxed text-star-300 marker:text-flare-400">
                {children}
              </ol>
            ),
            hr: () => <hr className="mt-10 border-field-600/50" />,
            code: ({ children }) => (
              <code className="rounded bg-field-700/60 px-1.5 py-0.5 font-mono text-[0.85em] text-tel-300">
                {children}
              </code>
            ),
            blockquote: ({ children }) => (
              <blockquote className="mt-4 border-l-2 border-flare-500/50 pl-4 text-star-300 italic">
                {children}
              </blockquote>
            ),
            table: ({ children }) => (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">{children}</table>
              </div>
            ),
            th: ({ children }) => (
              <th className="border-b border-field-600/50 px-3 py-2 text-left font-semibold text-star-100">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border-b border-field-600/30 px-3 py-2 text-star-300">{children}</td>
            ),
          }}
        >
          {DOCS[doc]}
        </ReactMarkdown>

        <p className="mt-14 border-t border-field-600/50 pt-6 font-mono text-xs text-star-500">
          {t("legal.source")}{" "}
          <a
            href={`${GITHUB_BLOB}${doc === "privacy" ? "PRIVACY.md" : "TERMS.md"}`}
            target="_blank"
            rel="noreferrer"
            className="text-flare-300 underline decoration-flare-500/40 underline-offset-4 transition-colors hover:text-flare-200"
          >
            tabrunner/tabrunner
          </a>
        </p>
      </main>
    </div>
  );
}
