import { IAvailableCouponProps, ITicketProps } from '@/types/logged'
import { Foot, Head, Lines } from '.'
import { ticketInfo, ticketStatus } from '@/utils/constants'
import Link from 'next/link'

export default function Ticket({
  value,
  nombreStatus,
  status,
  fecha_inicio,
  fecha_fin,
  id_certificado,
  setInfo,
  numero_cupon,
}: ITicketProps) {
  const realStatus = ticketStatus[status - 1]
  console.log(status)

  let info = ticketInfo[realStatus as unknown as keyof typeof ticketInfo]
  info.certificate = id_certificado

  return (
    <>
      <div className={`hidden lg:flex ${realStatus} ticket__container`} onClick={() => setInfo(info)}>
        <Head value={value} status={nombreStatus} number={numero_cupon} certificate={id_certificado} />
        <Lines />
        <Foot startDate={fecha_inicio} endDate={fecha_fin} />
      </div>
      <Link
        className={`flex lg:hidden ${realStatus} ticket__container`}
        href='/tickets/information?status=&certificate='
        as={`/tickets/information?status=${realStatus}&certificate=${id_certificado}`}
      >
        <Head value={value} status={nombreStatus} number={numero_cupon} certificate={id_certificado} />
        <Lines />
        <Foot startDate={fecha_inicio} endDate={fecha_fin} />
      </Link>
    </>
  )
}

export function AvailableCoupon({
  value,
  nombreStatus,
  status,
  fecha_inicio,
  fecha_fin,
  id_certificado,
  numero_cupon,
  onClick,
}: IAvailableCouponProps) {
  const realStatus = ticketStatus[status - 1]

  return (
    <>
      <div className={`hidden lg:flex ${realStatus} ticket__container`} onClick={onClick}>
        <Head value={value} status={nombreStatus} number={numero_cupon} certificate={id_certificado} />
        <Lines />
        <Foot startDate={fecha_inicio} endDate={fecha_fin} />
      </div>
      <div className={`flex lg:hidden ${realStatus} ticket__container`} onClick={onClick}>
        <Head value={value} status={nombreStatus} number={numero_cupon} certificate={id_certificado} />
        <Lines />
        <Foot startDate={fecha_inicio} endDate={fecha_fin} />
      </div>
    </>
  )
}
