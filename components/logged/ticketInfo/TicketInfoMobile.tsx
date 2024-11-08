import Image from 'next/image'
import { IInfo } from '@/types/logged/ticketInfo'
import Link from 'next/link'

export default function TicketInfoMobile({ info, lang, coupon }: IInfo) {
  const hasButton = info.status === 'startProcess' || info.status === 'active' || info.status === 'refused'

  return (
    <div className='w-screen h-[85vh] flex flex-col justify-center items-center px-8'>
      <Image src={info.image} className=' w-72' width={1200} height={1200} alt={info.image} />
      <h1 className='text-3xl mb-9 mt-5 text-center'>{info.title}</h1>
      <p>
        {info.message}
        {info.status === 'active' && info.certificate}.
      </p>

      {hasButton ? (
        <div className='flex flex-col items-center gap-6'>
          <Link href={`/${lang}/about`} className='link'>
            {coupon.contact}
          </Link>

          <Link href={`/${lang}/tickets`} className=' text-primary-100 underline underline-offset-4'>
            {coupon.seeCoupon}
          </Link>
        </div>
      ) : (
        <Link href={`/${lang}/tickets`} className='link'>
          {coupon.seeCoupon}
        </Link>
      )}
    </div>
  )
}
