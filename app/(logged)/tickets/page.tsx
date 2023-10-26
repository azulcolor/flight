'use client'

import { flightApi } from '@/api'
import TicketInfo from '@/components/logged/ticketInfo/TicketInfo'
import { Ticket } from '@/components/logged/tickets'
import { IInfoStructure, ITicket } from '@/types/logged'
import { ticketInfo } from '@/utils/constants'
import { useEffect, useState, useRef } from 'react'

export default function Tickets() {
  const [info, setInfo] = useState<IInfoStructure>(ticketInfo.default)
  const [tickets, setTickets] = useState<ITicket[]>([])
  const certificates = useRef<string[]>([])

  useEffect(() => {
    const fetchCupones = async () => {
      const certificatesValue = localStorage.getItem('certificates')
      const certificados = JSON.parse(certificatesValue || '[]')
      certificates.current = certificados
      console.log(certificates.current)

      try {
        const cupones = await flightApi.post('coupons', certificates.current)
        setTickets(cupones.data.cupons)
      } catch (error) {}
    }
    fetchCupones()
  }, [])

  return (
    <div>
      <section className='filter'>
        <p>Certificados: </p>
        <p>Todos</p>
        {certificates.current.map((certificate, index) => (
          <p key={index}>{certificate}</p>
        ))}
      </section>

      <div className='ticket__page'>
        <div className='tickets no-scrollbar'>
          {tickets && tickets.map((ticket, index) => <Ticket key={index} {...ticket} setInfo={setInfo} />)}
        </div>
        <TicketInfo info={info} />
      </div>
    </div>
  )
}
