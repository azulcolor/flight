import Image from 'next/image'
import Link from 'next/link'
import { HamburguerMenu } from '.'

export default function Header() {
  return (
    <header className='w-full z-10'>
      <nav className='lg:mx-20 mx-5 flex justify-between items-center py-4 mt-4 lg:mt-0'>
        <Image src='/images/desktopLogo.png' alt='logo' width={200} height={50} className='lg:block hidden' />
        <Image src='/images/mobileLogo.png' alt='logo' width={125} height={46} className='lg:hidden' />
        <HamburguerMenu />
        <ul className='hidden lg:flex lg:gap-x-10 '>
          <li className='nav__link'>
            <Link href={'/'}>Cupones</Link>
          </li>
          <li className='nav__link'>
            <Link href={'/'}>Datos Bancarios</Link>
          </li>
          <li className='nav__link'>
            <Link href={'/'}>Contacto</Link>
          </li>
          <li className='nav__link'>
            <Link href={'/'}>Cambio de contraseña</Link>
          </li>
        </ul>
        <p className='hidden lg:block text-secondary text-xl'>Cerrar sesión</p>
      </nav>
    </header>
  )
}
