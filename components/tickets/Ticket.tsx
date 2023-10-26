import { ITicketProps } from '@/types/logged'
import { Foot, Head, Lines } from '.'

export default function Ticket({ value, color, fecha_inicio, fecha_fin, nombreStatus }: ITicketProps) {
  return (
    <div className={`${color} ticket__container`}>
      <Head value={value} status={nombreStatus} />
      <Lines />
      <Foot startDate={fecha_inicio} endDate={fecha_fin} />
    </div>
  )
}
