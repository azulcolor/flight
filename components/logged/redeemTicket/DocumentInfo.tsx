import Image from 'next/image'

import { Lines } from '../tickets'
import useDocuments from '@/hooks/useDocuments'

function Header({ status }: { status: string }) {
  return (
    <section className='flex justify-between items-center px-3'>
      <h2 className='text-white'>{status}</h2>
      <p className='text-white'>12/12/2023</p>
    </section>
  )
}

function Footer({ certificates }: { certificates: number[] }) {
  return (
    <section className='flex justify-between px-3 items-center gap-4'>
      <div>
        <h3 className='text-white'>Certificados: </h3>
        <div className='flex'>
          {certificates.map((certificate, index) => {
            return (
              <p className='text-white' key={certificate}>
                {certificate} {certificates.length - 1 === index ? '' : '  - '}
              </p>
            )
          })}
        </div>
      </div>
      <Image src='/images/plane.png' alt='plane' width={32} height={10} className='h-8 lg:h-10 lg:w-10' />
    </section>
  )
}

export default function DocumentInfo() {
  const { documents } = useDocuments()

  let status

  return documents.map((document) => {
    return (
      (status = document.id_documento_status === 1 ? 'approved' : document.id_documento_status === 2 ? 'grayCard' : 'active'),
      (
        <div className={`flex ${status} ticket__container justify-around`} key={document.id}>
          <Header status={document.nombre_documento_status} />
          <Lines />
          <Footer certificates={document.certificates} />
        </div>
      )
    )
  })
}
