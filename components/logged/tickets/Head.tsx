import { ITicketHead } from '@/types/logged'

export default function Head({ value, status, certificate, number }: ITicketHead) {
  return (
    <div className='head__container'>
      <section className='left__head'>
        <p className='value mb-1'>{number}</p>
        <p className='status'>Certificado: {certificate}</p>
        <p className='status'>Cupón: {status}</p>
      </section>

      <section className='right__head'>
        <p className='value text-right'>${value} USD</p>
      </section>
    </div>
  )
}
