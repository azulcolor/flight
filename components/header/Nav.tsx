'use client'

import Link from 'next/link'
import { HamburguerMenu } from '.'
import { logout } from '@/utils/auth'
import { routes } from '@/utils/constants'

export default function Nav() {
  const { tickets, bankData, about, changePassword, redeemTicket } = routes

  return (
    <>
      <ul className='nav__link'>
        <li>
          <Link href={tickets}>Cupones</Link>
        </li>
        <li>
          <Link href={bankData}>Datos bancarios</Link>
        </li>
        <li>
          <Link href={about}>Contacto</Link>
        </li>
        <li>
          <Link href={changePassword}>Cambio de contraseña</Link>
        </li>
        <li>
          <Link href={redeemTicket}>Canjeo de cupones</Link>
        </li>
      </ul>
      <button className='logout' onClick={logout}>
        Cerrar sesión
      </button>
      <HamburguerMenu />
    </>
  )
}
