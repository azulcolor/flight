'use client'

import { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import Image from 'next/image'

import { languages } from '@/utils/constants'

export default function Selectlanguages() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('Español')

  const handleLanguage = (languageChoosen: string) => {
    setLanguage(languageChoosen)
    setIsOpen(false)
  }

  return (
    <div className='column__center relative lg:w-44 w-32 h-4 rounded-lg'>
      <button onClick={() => setIsOpen(!isOpen)} className='language__dropdown'>
        {language}
        {!isOpen ? <AiOutlineCaretDown className='h-8 bg-inherit' /> : <AiOutlineCaretUp className='h-8 bg-inherit' />}
        {isOpen && (
          <span>
            {languages.map((item, i) => (
              <div key={i} onClick={() => handleLanguage(item.language)}>
                <h3>{item.language}</h3>
                <Image src={item.flag} alt={item.language} className='lg:h-7 lg:w-7 h-5 w-5' />
              </div>
            ))}
          </span>
        )}
      </button>
    </div>
  )
}
