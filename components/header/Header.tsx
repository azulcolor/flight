import Image from 'next/image'
import React from 'react'

import { Nav, Selectlanguage } from '.'

export default function Header({ isLogged, lang }: { isLogged: boolean; lang: string }) {
  if (isLogged) {
    return (
      <header className='w-full z-10'>
        <nav className='header__nav justify-between '>
          <Image src='/images/desktopLogo.png' alt='logo' width={200} height={50} className='lg:block hidden' />
          <Image src='/images/mobileLogo.png' alt='logo' width={125} height={46} className='lg:hidden' />
          <Nav lang={lang} />
        </nav>
      </header>
    )
  }
  return (
    <header className='w-full z-10'>
      <nav className='header__nav justify-end'>
        <Selectlanguage lang={lang} />
      </nav>
    </header>
  )
}
