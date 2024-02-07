'use client'

import { SwrFetcher } from '@/api/flight'
import { Header } from '@/components/header'
import { useRouter } from 'next/navigation'

export default function LoggedLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const router = useRouter()
  const { lang } = params
  const { isLoading, error } = SwrFetcher('token')
  if (error) return router.push(`/${lang}`)
  if (isLoading) return <div></div>

  return (
    <section>
      <Header isLogged={true} lang={lang} />
      {children}
    </section>
  )
}
