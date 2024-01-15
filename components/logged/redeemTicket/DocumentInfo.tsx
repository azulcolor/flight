import Image from 'next/image'

import { Lines } from '../tickets'

interface IDocumentInfo {
  status: string
  statusName: string
}

function Header({ status }: { status: string }) {
  return (
    <section className='flex justify-between items-center px-3'>
      <h2 className='text-white'>{status}</h2>
      <p className='text-white'>12/12/2023</p>
    </section>
  )
}

function Footer() {
  return (
    <section className='flex justify-between px-3 items-center gap-4'>
      <div>
        <h3 className='text-white'>Certificados: </h3>
        <p className='text-white'>12344 - 24435 - 32535</p>
      </div>
      <Image src='/images/plane.png' alt='plane' width={32} height={10} className='h-8 lg:h-10 lg:w-10' />
    </section>
  )
}

export default function DocumentInfo({ status, statusName }: IDocumentInfo) {
  return (
    <>
      <div className={`flex ${status} ticket__container justify-around`}>
        <Header status={statusName} />
        <Lines />
        <Footer />
      </div>
    </>
  )
}
