'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/common'
import { routes } from '@/utils/constants'
import { Input } from '@/components/common'
import { IError } from '@/types'
import { flightPatch } from '@/api/flight'
import { getDictionary } from '../../dictionaries'

export default function ChangePassword({ params }: { params: any }) {
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [errors, setErrors] = useState<IError>({ ok: true, message: 'fgd' })

  const { lang } = params
  const { password } = getDictionary(lang)

  const data = { oldPassword, newPassword, confirmPassword }

  return (
    <div className='data__container'>
      <h1 className='password__title'>{password.title}</h1>
      <Image src='/images/passwordImage.png' alt='bank' width={300} height={300} />

      <div className='input__container gap-2'>
        <Input placeholder={password.current} type='password' focus={true} value={oldPassword} setValue={setOldPassword} />
        <Input placeholder={password.new} type='password' value={newPassword} setValue={setNewPassword} />
        <Input placeholder={password.confirm} type='password' value={confirmPassword} setValue={setConfirmPassword} />
        {errors.ok ? null : <p className='text-red-500 self-start'>{errors.message}</p>}
        <Button buttonFunction={() => flightPatch('edit/password', data, routes(lang).successPassword, setErrors)}>
          {password.button}
        </Button>
      </div>
    </div>
  )
}
