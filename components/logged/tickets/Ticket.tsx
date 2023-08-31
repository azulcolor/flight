import { ITicketProps } from '@/types/logged'
import { Foot, Head, Lines } from '.'
import { ticketInfo } from '@/utils/constants'

export default function Ticket({ value, status, color, startDate, endDate, setInfo }: ITicketProps) {
  return (
    <div className={`${color} ticket__container`} onClick={() => setInfo(ticketInfo[color as keyof typeof ticketInfo])}>
      <Head value={value} status={status} />
      <Lines />
      <Foot startDate={startDate} endDate={endDate} />
    </div>
  )
}
