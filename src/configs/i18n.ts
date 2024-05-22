export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'vi'],
  langDirection: {
    en: 'ltr',
    vi: 'ltr',
  }
} as const

export type Locale = (typeof i18n)['locales'][number]
