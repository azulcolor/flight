'use client'

import { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import Image from 'next/image'

import { languages } from '@/utils/constants'
import { useRouter } from 'next/navigation'

export default function Selectlanguages({ lang }: { lang: string }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [language] = useState(languages[lang].language)

  const handleLanguage = (short: string) => {
    router.push(`/${short}`)
  }

  return (
    <div className='column__center relative lg:w-44 w-32 h-4 rounded-lg'>
      <button onClick={() => setIsOpen(!isOpen)} className='language__dropdown'>
        {language}
        {!isOpen ? <AiOutlineCaretDown className='h-8 bg-inherit' /> : <AiOutlineCaretUp className='h-8 bg-inherit' />}
        {isOpen && (
          <span>
            {Object.keys(languages).map((key, i) => (
              <div key={i} onClick={() => handleLanguage(languages[key].short)}>
                <h3>{languages[key].language}</h3>
                <Image src={languages[key].flag} alt={languages[key].language} className='lg:h-7 lg:w-7 h-5 w-5' />
              </div>
            ))}
          </span>
        )}
      </button>
    </div>
  )
}
