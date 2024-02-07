'use client'

import Image from 'next/image'

import { getDictionary } from '../dictionaries'
import { useState } from 'react'
import { Button, Input } from '@/components/common'
import { LoginLinks } from '@/components/auth'
import { login } from '@/utils/auth'
import { IError } from '@/types'

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<IError>({ ok: true, message: '' })
  const dict = getDictionary(lang)

  const userData = { username, password }

  return (
    <main className='overflow-hidden'>
      <div className='column__center gap-12 w-full lg:gap-14'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' w-44 mt-16 lg:w-52 ' />
        <div className='column__center gap-2 lg:gap-3'>
          <h1 className='title mb-9'>{dict.login.title}</h1>

          <Input type='text' placeholder={dict.login.username} value={username} setValue={setUsername} focus={true} setError={setError} />
          <Input type='password' placeholder={dict.login.password} value={password} setValue={setPassword} setError={setError} />

          {!error.ok && <p className='text-red-500 self-start'>{error.message}</p>}
          <Button buttonFunction={() => login(userData, setError, lang)}>{dict.login.button}</Button>

          <LoginLinks dict={dict} lang={lang} />
        </div>
      </div>
    </main>
  )
}
