'use client'

import { useEffect, useState } from 'react'

import { Button, UpdateInput } from '@/components/common'
import { SwrFetcher, flightPatch } from '@/api/flight'
import { IError } from '@/types'
import { IBankData } from '@/types/logged'
import { routes } from '@/utils/constants'

export default function BankData() {
  const [bankData, setBankData] = useState<IBankData>({ banco: '', clabe: '', nombre_titular: '', pais: '', cuenta: 0 })

  const [errors, setErrors] = useState<IError>({ ok: true, message: '' })

  const { data, error, isLoading } = SwrFetcher('edit/getBankData')

  useEffect(() => {
    if (data) {
      setBankData(data.bankData)
    }
  }, [data])

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className='data__container'>
      <h1 className='data__title'>Datos bancarios</h1>
      <div className='flex gap-5 mb-16'>
        <p className='text-base lg:text-xl'>{bankData.nombre}</p>
        <p className='country'>{bankData.pais}</p>
      </div>

      <div className='input__container gap-2'>
        <UpdateInput
          placeholder='Nombre'
          setValue={setBankData}
          value={bankData.nombre_titular}
          type='text'
          setError={setErrors}
          name='nombre_titular'
        />
        <UpdateInput placeholder='Cuenta' setValue={setBankData} value={bankData.cuenta} type='number' setError={setErrors} name='cuenta' />
        <UpdateInput placeholder='Banco' setValue={setBankData} value={bankData.banco} type='text' setError={setErrors} name='banco' />
        <UpdateInput placeholder='CLABE' setValue={setBankData} value={bankData.clabe} type='text' setError={setErrors} name='clabe' />

        {errors.ok ? null : <p className='text-red-500 self-start'>{errors.message}</p>}

        <Button buttonFunction={() => flightPatch('edit/bank', bankData, routes.successBank, setErrors)}>Actualizar</Button>
      </div>
    </div>
  )
}
