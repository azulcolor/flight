'use client'

import Link from 'next/link'
import { HamburguerMenu } from '.'
import { logout } from '@/utils/auth'
import { routes } from '@/utils/constants'
import { getDictionary } from '@/app/[lang]/dictionaries'

export default function Nav({ lang }: { lang: string }) {
  const { tickets, bankData, about, changePassword, redeemTicket } = routes(lang)
  const { header } = getDictionary(lang)

  return (
    <>
      <ul className='nav__link'>
        <li>
          <Link href={tickets}>{header.coupons}</Link>
        </li>
        <li>
          <Link href={bankData}>{header.bankData}</Link>
        </li>
        <li>
          <Link href={about}>{header.contact}</Link>
        </li>
        <li>
          <Link href={changePassword}>{header.changePassword}</Link>
        </li>
        <li>
          <Link href={redeemTicket}>{header.redeemTicket}</Link>
        </li>
      </ul>
      <button className='logout' onClick={() => logout(lang)}>
        {header.logout}
      </button>
      <HamburguerMenu lang={lang} header={header} />
    </>
  )
}
