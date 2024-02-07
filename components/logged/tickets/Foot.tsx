import Image from 'next/image'

import { ITicketFoot } from '@/types/logged'

export default function Foot({ startDate, endDate, coupon }: ITicketFoot) {
  return (
    <div className='flex justify-between px-3 items-center gap-4'>
      <div>
        <p className='text-background lg:text-xl'>{coupon.valid}</p>
        <p className=' text-[10px] text-background lg:text-sm'>
          {startDate} al {endDate}
        </p>
      </div>
      <Image src='/images/plane.png' alt='plane' width={32} height={10} className='h-8' />
    </div>
  )
}
