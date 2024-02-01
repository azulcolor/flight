import { secondRegister } from '@/utils/auth/register'
import Image from 'next/image'
import { routes } from '@/utils/constants'
import Link from 'next/link'

async function getData(token: string) {
  const response = secondRegister(token)

  return response
}

export default async function SecondRegister({ params }: { params: { token: string } }) {
  const data = await getData(params.token)

  if (data.ok === false) {
    return (
      <div className='column__center justify-center h-[82vh]'>
        <Image src='/images/bad.png' alt='success' className='w-80' width={1200} height={1200} />
        <h2 className='text-2xl mb-8 mt-3'>¡Ha ocurrido un error!</h2>
        <p className='text-base mb-10'>{data.message}</p>
        <Link href={routes.login} className='button flex justify-center items-center'>
          Iniciar sesión
        </Link>
      </div>
    )
  }

  return (
    <div className='column__center justify-center h-[82vh]'>
      <Image src='/images/good.png' alt='success' className='w-80' width={1200} height={1200} />
      <h2 className='text-2xl mb-8 mt-3'>¡Su cuenta se ha creado con éxito!</h2>
      <p className='text-base mb-10'>Ahora deberás iniciar sesión con tu cuenta</p>
      <Link href={routes.login} className='button flex justify-center items-center'>
        Iniciar sesión
      </Link>
    </div>
  )
}
