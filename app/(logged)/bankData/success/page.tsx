'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/common'
import { routes } from '@/utils/constants'

export default function Success() {
  const handleButton = () => {
    window.location.href = routes.tickets
  }

  return (
    <div className='column__center justify-center h-[82vh]'>
      <Image src='/images/good.png' alt='success' className='w-80' width={1200} height={1200} />
      <h2 className='text-2xl mb-8 mt-3'>¡Tus datos de han actualizado!</h2>
      <p className='text-base mb-10'>Tus datos bancarios se han actualizado con éxito</p>
      <Button buttonFunction={handleButton}>Ver cupones</Button>
    </div>
  )
}