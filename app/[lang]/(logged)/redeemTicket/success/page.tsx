'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/common'
import { routes } from '@/utils/constants'
import { getDictionary } from '@/app/[lang]/dictionaries'

export default function Success({ params }: { params: any }) {
  const { lang } = params
  const { success } = getDictionary(lang).redeem

  const handleButton = () => {
    window.location.href = routes(lang).redeemTicket
  }

  return (
    <div className='column__center justify-center h-[82vh]'>
      <Image src='/images/good.png' alt='success' className='w-80' width={1200} height={1200} />
      <h2 className='text-2xl mb-8 mt-3'>{success.title}</h2>
      <p className='text-base mb-10'>{success.message}</p>
      <Button buttonFunction={handleButton}>{success.button}</Button>
    </div>
  )
}
