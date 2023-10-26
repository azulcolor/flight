'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button, Input } from '@/components/common'
import { ForgotLinks } from '@/components/auth'
import { resetPassword } from '@/utils/auth'
import { useSearchParams } from 'next/navigation'
import { IError } from '@/types'

export default function Change() {
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState<IError>({ ok: true, message: '' })

  const userData = { password, repeatPassword }

  const token = useSearchParams().get('token')

  return (
    <main className='overflow-hidden'>
      <div className='column__center gap-12 w-full lg:gap-14'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' w-44 mt-16 lg:w-52 ' />

        <div className='column__center gap-2 lg:gap-3'>
          <h1 className='title mb-1'>Cambiar contraseña</h1>

          <Input type='password' placeholder='Nueva contraseña' value={password} setValue={setPassword} focus={true} setError={setError} />
          <Input
            type='password'
            placeholder='Repetir nueva contraseña'
            value={repeatPassword}
            setValue={setRepeatPassword}
            focus={true}
            setError={setError}
          />

          {!error.ok && <p className='text-red-500 self-start'>{error.message}</p>}

          <Button buttonFunction={() => resetPassword(userData, token as string, setError)}>Continuar</Button>

          <ForgotLinks />
        </div>
      </div>
    </main>
  )
}
