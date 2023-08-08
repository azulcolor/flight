'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import { Nav, Selectlanguage } from '.'

export default function Header() {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const token = Cookies.get('token')
    setIsLogged(!!token)
  }, [])

  if (isLogged) {
    return (
      <header className='w-full z-10'>
        <nav className='header__nav justify-between '>
          <Image src='/images/desktopLogo.png' alt='logo' width={200} height={50} className='lg:block hidden' />
          <Image src='/images/mobileLogo.png' alt='logo' width={125} height={46} className='lg:hidden' />
          <Nav />
        </nav>
      </header>
    )
  }
  return (
    <header className='w-full z-10'>
      <nav className='header__nav justify-end'>
        <Selectlanguage />
      </nav>
    </header>
  )
}
