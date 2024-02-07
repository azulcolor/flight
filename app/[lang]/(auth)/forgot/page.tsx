'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button, Input } from '@/components/common'
import { ForgotLinks } from '@/components/auth'
import { forgotPassword } from '@/utils/auth'
import { getDictionary } from '../../dictionaries'

export default function Forgot({ params: { lang } }: { params: { lang: string } }) {
  const [email, setEmail] = useState('')
  const userData = { email }

  const { forgot } = getDictionary(lang)

  return (
    <main className='overflow-hidden'>
      <div className='column__center gap-12 w-full lg:gap-14'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' w-44 mt-16 lg:w-52 ' />

        <div className='column__center gap-2 lg:gap-3'>
          <h1 className='title mb-1'>{forgot.title}</h1>
          <p className='text-center px-1 mt-4 mb-9 lg:text-base w-72 lg:w-[523px] lg:px-5'>{forgot.message}</p>

          <Input type='email' placeholder={forgot.email} value={email} setValue={setEmail} focus={true} />
          <Button buttonFunction={() => forgotPassword(userData, lang)}>{forgot.button}</Button>

          <ForgotLinks forgot={forgot} lang={lang} />
        </div>
      </div>
    </main>
  )
}
