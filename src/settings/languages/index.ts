import EnLang from './entries/en-US'
import RuLang from './entries/ru-RU'

interface AppLocaleType {
  en: Record<string, any>
  ru: Record<string, any>
}

export const AppLocale: AppLocaleType = {
  en: EnLang,
  ru: RuLang,
}
