'use client'

import TicketInfo from '@/components/logged/ticketInfo/TicketInfo'
import { Ticket } from '@/components/logged/tickets'
import { IInfoStructure } from '@/types/logged'
import { ticketInfo } from '@/utils/constants'
import tickets from '@/utils/constants/tickets'
import { useState } from 'react'

export default function Tickets() {
  const [info, setInfo] = useState<IInfoStructure>(ticketInfo.default)
  return (
    <div className='ticket__page'>
      <div className='tickets no-scrollbar'>
        {tickets.map((ticket, index) => (
          <Ticket key={index} {...ticket} setInfo={setInfo} />
        ))}
      </div>
      <TicketInfo info={info} />
    </div>
  )
}
