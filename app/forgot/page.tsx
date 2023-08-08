'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button, Input } from '@/components/common'
import { ForgotLinks } from '@/components/auth'
import { forgotPassword } from '@/utils/auth'

export default function Forgot() {
  const [email, setEmail] = useState('')
  const userData = { email }

  return (
    <main className='overflow-hidden'>
      <div className='column__center gap-12 w-full lg:gap-14'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' w-44 mt-16 lg:w-52 ' />

        <div className='column__center gap-2 lg:gap-3'>
          <h1 className='title mb-1'>Recuperar contraseña</h1>
          <p className='text-center px-1 mt-4 mb-9 lg:text-base w-72 lg:w-[523px] lg:px-5'>
            Proporciona el correo con el que te registraste y te enviaremos un correo para cambiar la contraseña
          </p>

          <Input type='email' placeholder='Correo electrónico' value={email} setValue={setEmail} focus={true} />
          <Button buttonFunction={() => forgotPassword(userData)}>Enviar</Button>

          <ForgotLinks />
        </div>
      </div>
    </main>
  )
}
