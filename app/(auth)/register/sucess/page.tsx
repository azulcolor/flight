import { routes } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Success() {
  return (
    <div className='column__center justify-center h-[82vh]'>
      <Image src='/images/good.png' alt='success' className='w-80' width={1200} height={1200} />
      <h2 className='text-2xl mb-8 mt-3'>¡Perfecto!</h2>
      <p className='text-base mb-10'>Se te envió un correo para poder activar tu cuenta</p>
      <Link href={routes.login} className='button flex justify-center items-center'>
        Volver al inicio
      </Link>
    </div>
  )
}
