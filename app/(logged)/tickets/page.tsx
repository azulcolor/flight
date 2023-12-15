'use client'

import TicketInfo from '@/components/logged/ticketInfo/TicketInfo'
import { Ticket } from '@/components/logged/tickets'
import { IInfoStructure, ITicket } from '@/types/logged'
import { ticketInfo } from '@/utils/constants'
import { useEffect, useState } from 'react'
import { FilterArray, FilterObject } from '../../../components/common/Filter'
import { useCoupons } from '@/hooks/useCoupons'
import { filter } from '@/services/filter'

export default function Tickets() {
  const [info, setInfo] = useState<IInfoStructure>(ticketInfo.default)
  const [certificateFilter, setCertificateFilter] = useState<string>('Todos')
  const [statusFilter, setStatusFilter] = useState<string>('0')
  const [filterTickets, setFilterTickets] = useState<ITicket[]>([])

  const { certificates, tickets, status } = useCoupons()
  useEffect(() => {
    setFilterTickets(tickets)
    filter(certificateFilter, statusFilter, tickets, setFilterTickets)
  }, [certificateFilter, tickets, statusFilter])

  return (
    <div>
      <section className='filter'>
        <FilterArray options={certificates.current} value={certificateFilter} setValue={setCertificateFilter} label='Certificados' />
        <FilterObject options={status} value={statusFilter} setValue={setStatusFilter} label='Estado' />
      </section>

      <div className='ticket__page'>
        <div className='tickets no-scrollbar'>
          {tickets && filterTickets.map((ticket, index) => <Ticket key={index} {...ticket} setInfo={setInfo} />)}
        </div>
        <TicketInfo info={info} />
      </div>
    </div>
  )
}
