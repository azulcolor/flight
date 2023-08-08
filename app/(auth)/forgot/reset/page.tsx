'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button, Input } from '@/components/common'
import { ForgotLinks } from '@/components/auth'
import { resetPassword } from '@/utils/auth'

export default function Change() {
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [message, setMessage] = useState('')

  const userData = { password, repeatPassword }

  const handleSubmit = () => {
    if (password != repeatPassword) {
      setMessage('Las contraseñas no coinciden, inténtelo de nuevo')
      setRepeatPassword('')
      return
    }
    resetPassword(userData)
  }

  return (
    <main className='overflow-hidden'>
      <div className='column__center gap-12 w-full lg:gap-14'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' w-44 mt-16 lg:w-52 ' />

        <div className='column__center gap-2 lg:gap-3'>
          <h1 className='title mb-1'>Recuperar contraseña</h1>
          <p className='text-center px-1 mt-4 mb-9 lg:text-base w-72 lg:w-[523px] lg:px-5'>
            Proporciona el correo con el que te registraste y te enviaremos un correo para cambiar la contraseña
          </p>

          <Input type='password' placeholder='Nueva contraseña' value={password} setValue={setPassword} focus={true} />
          <Input type='password' placeholder='Repetir nueva contraseña' value={repeatPassword} setValue={setRepeatPassword} focus={true} />

          {message && <p className='lg:text-sm w-72 lg:w-[523px] text-refused-card'>{message}</p>}
          <Button buttonFunction={handleSubmit}>Continuar</Button>

          <ForgotLinks />
        </div>
      </div>
    </main>
  )
}
