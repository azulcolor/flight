import Cookies from 'js-cookie'

const dictionaries = {
  en: require('@/dictionaries/en.json'),
  es: require('@/dictionaries/es.json'),
}

export const getDictionary = (lang) => {
  Cookies.set('lang', lang)

  return dictionaries[lang]
}
