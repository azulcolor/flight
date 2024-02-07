'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button, Input } from '@/components/common'
import { RegisterLinks } from '@/components/auth'
import { register } from '@/utils/auth'
import Select from '@/components/common/Select'
import { IError } from '@/types'
import { getDictionary } from '../../dictionaries'

export default function Register({ params: { lang } }: { params: { lang: string } }) {
  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [language, setLanguage] = useState('es')
  const [membership, setMembership] = useState('')
  const dict = getDictionary(lang)

  const [error, setError] = useState<IError>({ ok: true, message: '' })

  const userData = { username, password, membership, fullname, language, email }
  const values = [
    { value: 'es', label: 'Español' },
    { value: 'en', label: 'Inglés' },
  ]

  return (
    <main className='overflow-hidden'>
      <div className='column__center gap-12 w-full lg:gap-14'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' w-44 mt-16 lg:w-52 ' />

        <div className='column__center gap-2 lg:gap-3'>
          <h1 className='title mb-9'>{dict.register.title}</h1>

          <Input type='text' placeholder={dict.register.fullname} value={fullname} setValue={setFullname} focus={true} />
          <Input type='email' placeholder={dict.register.email} value={email} setValue={setEmail} />
          <Input type='text' placeholder={dict.register.username} value={username} setValue={setUsername} />
          <Input type='password' placeholder={dict.register.password} value={password} setValue={setPassword} />
          <Input type='text' placeholder={dict.register.membership} value={membership} setValue={setMembership} />

          <Select values={values} setValue={setLanguage} />

          {!error.ok && <p className='text-red-500 self-start'>{error.message}</p>}

          <Button buttonFunction={() => register(userData, setError, lang)}>{dict.register.button}</Button>

          <RegisterLinks lang={lang} dict={dict} />
        </div>
      </div>
    </main>
  )
}
