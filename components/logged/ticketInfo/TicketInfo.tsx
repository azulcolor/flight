import Image from 'next/image'
import { IInfo } from '@/types/logged/ticketInfo'
import Link from 'next/link'

export default function TicketInfo({ info }: IInfo) {
  const hasButton = info.status === 'startProcess' || info.status === 'active' || info.status === 'refused'

  return (
    <div className='h-screen w-screen lg:w-auto lg:h-auto lg:col-span-3 lg:flex lg:items-center justify-center hidden'>
      <Image src={info.image} className=' w-72' width={1200} height={1200} alt={info.image} />
      <div className=' w-2/4 ml-14 flex flex-col'>
        <h1 className=' text-3xl mb-5'>{info.title}</h1>
        <p>{info.message}</p>
        {hasButton && (
          <Link href={'/'} className='link'>
            Ver contacto
          </Link>
        )}
      </div>
    </div>
  )
}
