import Image from 'next/image'
import Link from 'next/link'

import { contact } from '@/utils/constants'

export default function ContactInfo({ isLogged }: { isLogged: boolean }) {
  const contactElements = contact.map((item, index) => {
    return (
      <div className='column__center mb-20 w-9/12' key={index}>
        <Image src={`/images/${item.image}`} className='w-32' width={300} height={300} alt={item.title} />
        <h3 className='mt-6 mb-6 text-subtitle text-xl'>{item.title}</h3>

        {item.info.map((info, i) => {
          return (
            <p className='mt-2 self-start text-base lg:self-center lg:w-96 lg:text-center' key={i}>
              {info}
            </p>
          )
        })}
      </div>
    )
  })

  return (
    <section className='column__center pt-20 w-full lg:flex-row lg:h-screen'>
      {contactElements}
      {!isLogged && (
        <Link
          href='/'
          className='text-secondary text-base text-center hover:text-secondary lg:text-lg fixed bottom-0 left-0 w-full pb-4 pt-1 bg-background'
        >
          Iniciar sesión
        </Link>
      )}
    </section>
  )
}
