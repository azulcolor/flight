import mxFlag from '@/public/images/mxFlag.png'
import usaFlag from '@/public/images/usaFlag.png'
import { StaticImageData } from 'next/image'

interface Language {
  language: string
  flag: StaticImageData
  short: string
}

interface Lang {
  [key: string]: Language
  es: Language
  en: Language
}

export const languages: Lang = {
  es: {
    language: 'Español',
    flag: mxFlag,
    short: 'es',
  },
  en: {
    language: 'English',
    flag: usaFlag,
    short: 'en',
  },
}

export default languages
