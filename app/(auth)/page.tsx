'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button, Input } from '@/components/common'
import { LoginLinks } from '@/components/auth'
import { login } from '@/utils/auth'
import { IError } from '@/types'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<IError>({ ok: true, message: '' })

  const userData = { username, password }

  return (
    <main className='overflow-hidden'>
      <div className='column__center gap-12 w-full lg:gap-14'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' w-44 mt-16 lg:w-52 ' />
        <div className='column__center gap-2 lg:gap-3'>
          <h1 className='title mb-9'>Iniciar sesión</h1>

          <Input type='text' placeholder='Usuario' value={username} setValue={setUsername} focus={true} setError={setError} />
          <Input type='password' placeholder='Contraseña' value={password} setValue={setPassword} setError={setError} />

          {!error.ok && <p className='text-red-500 self-start'>{error.message}</p>}
          <Button buttonFunction={() => login(userData, setError)}>Continuar</Button>

          <LoginLinks />
        </div>
      </div>
    </main>
  )
}
