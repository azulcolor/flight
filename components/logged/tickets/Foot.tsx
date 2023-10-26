import Image from 'next/image'

import { ITicketFoot } from '@/types/logged'

export default function Foot({ startDate, endDate }: ITicketFoot) {
  return (
    <div className='flex justify-between px-3'>
      <div>
        <p className='text-background lg:text-xl'>Valido de</p>
        <p className=' text-[10px] text-background lg:text-sm'>
          {startDate} al {endDate}
        </p>
      </div>
      <Image src='/images/plane.png' alt='plane' width={40} height={40} />
    </div>
  )
}
