'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Input } from '@/components/common'
import { LoginLinks } from '@/components/auth'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className='overflow-hidden'>
      <div className='flex flex-col items-center gap-12'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' w-44 mt-16 ' />
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl text-title text-center m-4'>Iniciar sesión</h1>
          <Input type='email' placeholder='Correo electrónico' value={email} setValue={setEmail} />
          <Input type='password' placeholder='Contraseña' value={password} setValue={setPassword} />
          <button className='bg-primary text-white text-sm rounded-lg w-72 h-10 mt-4'>Continuar</button>
          <LoginLinks />
        </div>
      </div>
    </main>
  )
}
