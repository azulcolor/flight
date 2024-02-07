'use client'

import { logout } from '@/utils/auth'
import { routes } from '@/utils/constants'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

export default function HamburguerMenu({ lang, header }: { lang: string; header: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { tickets, bankData, about, changePassword, redeemTicket } = routes(lang)

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
        <Link href={tickets}>{header.coupons}</Link>
        <Link href={bankData}>{header.bankData}</Link>
        <Link href={about}>{header.contact}</Link>
        <Link href={changePassword}>{header.changePassword}</Link>
        <Link href={redeemTicket}>{header.redeemTicket}</Link>
        <button className='text-left' onClick={() => logout(lang)}>
          {header.logout}
        </button>
      </div>
    </div>
  )
}
