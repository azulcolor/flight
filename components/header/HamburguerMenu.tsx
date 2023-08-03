'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HamburguerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const switchMenuState = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    let handler = () => setIsMenuOpen(false)

    document.addEventListener('mousedown', handler)
  })

  return (
    <div className='hamburguer__menu' onClick={switchMenuState}>
      <div className='w-6 hamburguer__line' />
      <div className='w-4 hamburguer__line' />
      <div className='w-6 hamburguer__line' />
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} menu__mobile`}>
        <Link href='#'>Cupones</Link>
        <Link href='#'>Datos Bancarios</Link>
        <Link href='#'>Contacto</Link>
        <Link href='#'>Cambiar contraseña</Link>
        <Link href='#'>Cerrar sesión</Link>
      </div>
    </div>
  )
}
