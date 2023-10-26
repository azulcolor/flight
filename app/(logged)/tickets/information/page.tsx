'use client'

import { TicketInfoMobile } from '@/components/logged/ticketInfo'
import { ticketInfo } from '@/utils/constants'
import { useSearchParams } from 'next/navigation'

export default function Information() {
  const certificate = useSearchParams().get('certificate')
  const status = useSearchParams().get('status')
  let info = ticketInfo[status as unknown as keyof typeof ticketInfo]

  if (certificate) info.certificate = certificate

  return <TicketInfoMobile info={info} />
}
