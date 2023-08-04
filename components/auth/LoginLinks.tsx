import Link from 'next/link'

export default function LoginLinks() {
  return (
    <>
      <Link href='/forgot' className='text-text text-sm text-center hover:text-secondary mt-4 lg:text-base'>
        ¿Olvidaste tu contraseña?
      </Link>

      <div className='flex flex-col lg:flex-row lg:items-center lg:mt-2'>
        <Link href='/register' className='text-text text-sm text-center hover:text-secondary mt-4 lg:text-base lg:mt-0 lg:mr-3'>
          ¿No tienes una cuenta?
        </Link>
        <Link href='/register' className='text-primary-100 text-sm text-center hover:text-secondary mt-2 lg:text-base lg:mt-0'>
          Crear cuenta
        </Link>
      </div>

      <Link href='/contact' className='text-secondary text-base text-center hover:text-secondary lg:text-lg mt-10'>
        Contáctanos
      </Link>
    </>
  )
}
