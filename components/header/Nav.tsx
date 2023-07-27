import Link from 'next/link'
import { HamburguerMenu } from '.'

export default function Nav() {
  return (
    <>
      <ul className='nav__link'>
        <li>
          <Link href={'/'}>Cupones</Link>
        </li>
        <li>
          <Link href={'/'}>Datos Bancarios</Link>
        </li>
        <li>
          <Link href={'/'}>Contacto</Link>
        </li>
        <li>
          <Link href={'/'}>Cambio de contraseña</Link>
        </li>
      </ul>
      <button className='logout'>Cerrar sesión</button>
      <HamburguerMenu />
    </>
  )
}
