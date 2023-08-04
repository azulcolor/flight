import Link from 'next/link'

export default function RegisterLinks() {
  return (
    <>
      <p className='text-text text-sm text-center px-1 mt-4 lg:text-base w-72 lg:w-[523px] lg:px-5'>
        El correo y el número de membresía deberán ser los proporcionados en el contrato
      </p>

      <div className='flex flex-col lg:flex-row lg:items-center lg:mt-2'>
        <Link href='/' className='text-text text-sm text-center hover:text-secondary mt-4 lg:text-base lg:mt-0 lg:mr-3'>
          ¿Ya tienes una cuenta?
        </Link>
        <Link href='/' className='text-primary-100 text-sm text-center hover:text-secondary mt-2 lg:text-base lg:mt-0'>
          Iniciar sesión
        </Link>
      </div>

      <Link href='/contact' className='text-secondary text-base text-center hover:text-secondary lg:text-lg mt-10'>
        Contáctanos
      </Link>
    </>
  )
}
