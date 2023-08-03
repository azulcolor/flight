import Link from 'next/link'

export default function LoginLinks() {
  return (
    <>
      <Link href='/register' className='text-text text-sm text-center hover:text-secondary mt-4'>
        ¿Olvidaste tu contraseña?
      </Link>
      <Link href='/register' className='text-text text-sm text-center hover:text-secondary mt-4'>
        ¿No tienes una cuenta?
      </Link>
      <Link href='/register' className='text-primary text-sm text-center hover:text-secondary mt-2'>
        Crear cuenta
      </Link>
      <Link href='/register' className='text-secondary text-base text-center hover:text-secondary mt-10'>
        Contáctanos
      </Link>
    </>
  )
}
