import { ITicket } from '@/types/logged'

export const filter = (
  certificate: string | number,
  status: string | number,
  tickets: ITicket[],
  setFilterTickets: (value: ITicket[]) => void,
  all: string,
) => {
  setFilterTickets(tickets)
  let filteredTickets = tickets

  if (certificate != all) {
    filteredTickets = tickets.filter((ticket) => ticket.id_certificado === certificate)
    setFilterTickets(filteredTickets)
  }
  if (status != '0') {
    filteredTickets = filteredTickets.filter((ticket) => ticket.status === status)
    setFilterTickets(filteredTickets)
  }
}
