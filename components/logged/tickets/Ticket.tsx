import { IAvailableCouponProps, IInfoStructure, ITicketProps } from '@/types/logged'
import { Foot, Head, Lines } from '.'
import { ticketInfo, ticketStatus } from '@/utils/constants'
import Link from 'next/link'
import { ticketTest } from '@/utils/constants/ticketInfo'

export default function Ticket({
  value,
  nombreStatus,
  status,
  fecha_inicio,
  fecha_fin,
  id_certificado,
  setInfo,
  numero_cupon,
  coupon,
  lang,
}: ITicketProps) {
  const ticket = ticketTest.find((item) => item.id === status)
  var realStatus = 'default'

  if (ticket) realStatus = ticket.name

  let info: IInfoStructure
  info = ticketInfo(lang)[realStatus as unknown as keyof typeof ticketInfo]
  info.certificate = id_certificado

  return (
    <>
      <div className={`hidden lg:flex ${realStatus} ticket__container`} onClick={() => setInfo(info)}>
        <Head value={value} status={nombreStatus} number={numero_cupon} certificate={id_certificado} coupon={coupon} />
        <Lines />
        <Foot startDate={fecha_inicio} endDate={fecha_fin} coupon={coupon} />
      </div>
      <Link
        className={`flex lg:hidden ${realStatus} ticket__container`}
        href={`/${lang}/tickets/information?status=&certificate=`}
        as={`/${lang}/tickets/information?status=${realStatus}&certificate=${id_certificado}`}
      >
        <Head value={value} status={nombreStatus} number={numero_cupon} certificate={id_certificado} coupon={coupon} />
        <Lines />
        <Foot startDate={fecha_inicio} endDate={fecha_fin} coupon={coupon} />
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
  coupon,
}: IAvailableCouponProps) {
  const realStatus = ticketStatus[status - 1]

  return (
    <>
      <div className={`hidden lg:flex ${realStatus} ticket__container`} onClick={onClick}>
        <Head value={value} status={nombreStatus} number={numero_cupon} certificate={id_certificado} coupon={coupon} />
        <Lines />
        <Foot startDate={fecha_inicio} endDate={fecha_fin} coupon={coupon} />
      </div>
      <div className={`flex lg:hidden ${realStatus} ticket__container`} onClick={onClick}>
        <Head value={value} status={nombreStatus} number={numero_cupon} certificate={id_certificado} coupon={coupon} />
        <Lines />
        <Foot startDate={fecha_inicio} endDate={fecha_fin} coupon={coupon} />
      </div>
    </>
  )
}
