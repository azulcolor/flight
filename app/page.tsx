'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button, Input } from '@/components/common'
import { LoginLinks } from '@/components/auth'
import { login } from '@/utils/auth'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userData = { email, password }

  return (
    <main className='overflow-hidden'>
      <div className='column__center gap-12 w-full lg:gap-14'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' w-44 mt-16 lg:w-52 ' />
        <div className='column__center gap-2 lg:gap-3'>
          <h1 className='title mb-9'>Iniciar sesión</h1>

          <Input type='email' placeholder='Correo electrónico' value={email} setValue={setEmail} focus={true} />
          <Input type='password' placeholder='Contraseña' value={password} setValue={setPassword} />
          <Button buttonFunction={() => login(userData)}>Continuar</Button>

          <LoginLinks />
        </div>
      </div>
    </main>
  )
}
