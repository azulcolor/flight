'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button, Input } from '@/components/common'
import { resetPassword } from '@/utils/auth'
import { IError } from '@/types'
import { getDictionary } from '@/app/[lang]/dictionaries'

export default function Change({ params }: { params: { lang: string; token: string } }) {
  const { lang, token } = params

  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState<IError>({ ok: true, message: '' })

  const userData = { password, repeatPassword, token }

  const { second } = getDictionary(lang).forgot

  return (
    <main className='overflow-hidden'>
      <div className='column__center gap-12 w-full lg:gap-14'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className='w-44 mt-16 lg:w-52 ' />

        <div className='column__center gap-2 lg:gap-3'>
          <h1 className='title mb-1'>{second.title}</h1>

          <Input
            type='password'
            placeholder={second.newPassword}
            value={password}
            setValue={setPassword}
            focus={true}
            setError={setError}
          />
          <Input
            type='password'
            placeholder={second.confirmPassword}
            value={repeatPassword}
            setValue={setRepeatPassword}
            focus={true}
            setError={setError}
          />

          {!error.ok && <p className='text-red-500 self-start'>{error.message}</p>}

          <Button buttonFunction={() => resetPassword(userData, setError, lang)}>{second.continue}</Button>
        </div>
      </div>
    </main>
  )
}
