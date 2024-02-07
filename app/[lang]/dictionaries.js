const dictionaries = {
  en: require('@/dictionaries/en.json'),
  es: require('@/dictionaries/es.json'),
}

export const getDictionary = (locale) => dictionaries[locale]
