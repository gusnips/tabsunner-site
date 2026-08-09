import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enUS } from "./locales/en-US";
import { ptBR } from "./locales/pt-BR";
import { esES } from "./locales/es-ES";

export const SUPPORTED_LANGUAGES = ["en-US", "pt-BR", "es-ES"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const STORAGE_KEY = "tabrunner-site-lang";

function isSupported(value: string): value is SupportedLanguage {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

/** URL ?lang= wins (shareable localized links), then stored choice, then browser language. */
function detectLanguage(): SupportedLanguage {
  try {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param) {
      const normalized = param.toLowerCase();
      const match = SUPPORTED_LANGUAGES.find((l) => l.toLowerCase() === normalized);
      if (match) return match;
      if (normalized.startsWith("pt")) return "pt-BR";
      if (normalized.startsWith("es")) return "es-ES";
      if (normalized.startsWith("en")) return "en-US";
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && isSupported(stored)) return stored;
  } catch {
    // private mode etc. — fall through to detection
  }
  for (const lang of navigator.languages ?? [navigator.language]) {
    const tag = lang.toLowerCase();
    if (tag.startsWith("pt")) return "pt-BR";
    if (tag.startsWith("es")) return "es-ES";
    if (tag.startsWith("en")) return "en-US";
  }
  return "en-US";
}

const initial = detectLanguage();
document.documentElement.lang = initial;

void i18n.use(initReactI18next).init({
  resources: {
    "en-US": { translation: enUS },
    "pt-BR": { translation: ptBR },
    "es-ES": { translation: esES },
  },
  lng: initial,
  fallbackLng: "en-US",
  interpolation: { escapeValue: false },
  returnEmptyString: false,
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // non-fatal: the choice just won't persist
  }
});

export default i18n;
