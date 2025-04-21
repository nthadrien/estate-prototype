import { ui, defaultLang } from './ui.ts';

export type LangType = keyof typeof ui;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as LangType;
  return defaultLang;
}

export function useTranslations(lang: LangType) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  }
}


