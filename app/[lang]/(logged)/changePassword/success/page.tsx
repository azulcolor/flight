'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/common'
import { routes } from '@/utils/constants'

export default function Success({ params: { lang } }: { params: { lang: string } }) {
  const handleButton = () => {
    window.location.href = routes(lang).tickets
  }

  return (
    <div className='column__center justify-center h-[82vh]'>
      <Image src='/images/passwordImage.png' alt='success' className='w-80' width={1200} height={1200} />
      <h2 className='text-2xl mb-8 mt-3'>¡Tus datos se han actualizado!</h2>
      <p className='text-base mb-10'>Tu contraseña se ha actualizado con éxito</p>
      <Button buttonFunction={handleButton}>Ver cupones</Button>
    </div>
  )
}
