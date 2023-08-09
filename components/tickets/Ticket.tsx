import { ITicketProps } from '@/types/logged'
import { Foot, Head, Lines } from '.'

export default function Ticket({ value, status, color, startDate, endDate }: ITicketProps) {
  return (
    <div className={`${color} ticket__container`}>
      <Head value={value} status={status} />
      <Lines />
      <Foot startDate={startDate} endDate={endDate} />
    </div>
  )
}
