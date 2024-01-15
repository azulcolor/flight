'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/common'
import { routes } from '@/utils/constants'

export default function Success() {
  const handleButton = () => {
    window.location.href = routes.redeemTicket
  }

  return (
    <div className='column__center justify-center h-[82vh]'>
      <Image src='/images/good.png' alt='success' className='w-80' width={1200} height={1200} />
      <h2 className='text-2xl mb-8 mt-3'>¡Se ha enviado con éxito!</h2>
      <p className='text-base mb-10'>Tu documento se ha enviado con éxito, pronto será revisada por los administradores.</p>
      <Button buttonFunction={handleButton}>Ver envíos</Button>
    </div>
  )
}
