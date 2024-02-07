'use client'

import { getDictionary } from '@/app/[lang]/dictionaries'
import { TicketInfoMobile } from '@/components/logged/ticketInfo'
import { IInfoStructure } from '@/types/logged'
import { ticketInfo } from '@/utils/constants'
import { useSearchParams } from 'next/navigation'

export default function Information({ params }: { params: any }) {
  const certificate = useSearchParams().get('certificate')
  const status = useSearchParams().get('status')
  const { lang } = params
  const { coupon } = getDictionary(lang)
  let info: IInfoStructure
  info = ticketInfo(lang)[status as unknown as keyof typeof ticketInfo]

  if (certificate) info.certificate = certificate

  return <TicketInfoMobile info={info} lang={lang} coupon={coupon} />
}
