import mxFlag from '@/public/images/mxFlag.png'
import usaFlag from '@/public/images/usaFlag.png'
import { StaticImageData } from 'next/image'

interface Language {
  language: string
  flag: StaticImageData
}

export const languages: Language[] = [
  {
    language: 'Español',
    flag: mxFlag,
  },
  {
    language: 'English',
    flag: usaFlag,
  },
]
