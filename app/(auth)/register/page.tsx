'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button, Input } from '@/components/common'
import { RegisterLinks } from '@/components/auth'
import { register } from '@/utils/auth'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [membership, setMembership] = useState('')

  const userData = { email, password, membership }

  return (
    <main className='overflow-hidden'>
      <div className='column__center gap-12 w-full lg:gap-14'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' w-44 mt-16 lg:w-52 ' />

        <div className='column__center gap-2 lg:gap-3'>
          <h1 className='title mb-9'>Registrarse</h1>

          <Input type='email' placeholder='Correo electrónico' value={email} setValue={setEmail} focus={true} />
          <Input type='password' placeholder='Contraseña' value={password} setValue={setPassword} />
          <Input type='text' placeholder='Número de membresía' value={membership} setValue={setMembership} />
          <Button buttonFunction={() => register(userData)}>Continuar</Button>

          <RegisterLinks />
        </div>
      </div>
    </main>
  )
}
