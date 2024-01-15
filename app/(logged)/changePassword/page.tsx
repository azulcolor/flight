'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/common'
import { routes } from '@/utils/constants'
import { Input } from '@/components/common'
import { IError } from '@/types'
import { flightPatch } from '@/api/flight'

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [errors, setErrors] = useState<IError>({ ok: true, message: 'fgd' })

  const data = { oldPassword, newPassword, confirmPassword }

  return (
    <div className='data__container'>
      <h1 className='password__title'>Cambiar contraseña</h1>
      <Image src='/images/passwordImage.png' alt='bank' width={300} height={300} />

      <div className='input__container gap-2'>
        <Input placeholder='Anterior contraseña' type='password' focus={true} value={oldPassword} setValue={setOldPassword} />
        <Input placeholder='Nueva contraseña' type='password' value={newPassword} setValue={setNewPassword} />
        <Input placeholder='Repetir contraseña' type='password' value={confirmPassword} setValue={setConfirmPassword} />
        {errors.ok ? null : <p className='text-red-500 self-start'>{errors.message}</p>}
        <Button buttonFunction={() => flightPatch('edit/password', data, routes.successPassword, setErrors)}>Actualizar</Button>
      </div>
    </div>
  )
}
