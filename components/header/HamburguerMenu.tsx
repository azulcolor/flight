'use client'

import { logout } from '@/utils/auth'
import { routes } from '@/utils/constants'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

export default function HamburguerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { tickets, bankData, about, changePassword } = routes

  let menuRef = useRef<HTMLDivElement>(null)

  const switchMenuState = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const node = menuRef.current

    let handler = (e: { target: any }) => {
      if (!node?.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div className='hamburguer__menu' onClick={switchMenuState} ref={menuRef}>
      <div className='w-6 hamburguer__line' />
      <div className='w-4 hamburguer__line' />
      <div className='w-6 hamburguer__line' />
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} menu__mobile`}>
        <Link href={tickets}>Cupones</Link>
        <Link href={bankData}>Datos Bancarios</Link>
        <Link href={about}>Contacto</Link>
        <Link href={changePassword}>Cambiar contraseña</Link>
        <button className='text-left' onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}
