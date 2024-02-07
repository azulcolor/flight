'use client'

import TicketInfo from '@/components/logged/ticketInfo/TicketInfo'
import { Ticket } from '@/components/logged/tickets'
import { IInfoStructure, ITicket } from '@/types/logged'
import { ticketInfo } from '@/utils/constants'
import { useEffect, useState } from 'react'
import { FilterArray, FilterObject } from '../../../../components/common/Filter'
import { useCoupons } from '@/hooks/useCoupons'
import { filter } from '@/services/filter'
import { getDictionary } from '../../dictionaries'

export default function Tickets({ params }: { params: any }) {
  const { certificates, tickets, status } = useCoupons()
  const { lang } = params
  const coupon = getDictionary(lang).coupon
  const [info, setInfo] = useState<IInfoStructure>(ticketInfo(lang).default)
  const [certificateFilter, setCertificateFilter] = useState<string>(coupon.all)
  const [statusFilter, setStatusFilter] = useState<string>('0')
  const [filterTickets, setFilterTickets] = useState<ITicket[]>([])

  useEffect(() => {
    setFilterTickets(tickets)
    filter(certificateFilter, statusFilter, tickets, setFilterTickets, coupon.all)
  }, [certificateFilter, tickets, statusFilter, coupon.all])

  return (
    <div>
      <section className='filter'>
        <FilterArray
          options={certificates.current}
          value={certificateFilter}
          setValue={setCertificateFilter}
          label={coupon.filter.certificates}
        />
        <FilterObject options={status} value={statusFilter} setValue={setStatusFilter} label={coupon.filter.status} />
      </section>

      <div className='ticket__page'>
        <div className='tickets no-scrollbar'>
          {tickets &&
            filterTickets.map((ticket, index) => <Ticket key={index} {...ticket} setInfo={setInfo} coupon={coupon} lang={lang} />)}
        </div>
        <TicketInfo info={info} lang={lang} coupon={coupon} />
      </div>
    </div>
  )
}
