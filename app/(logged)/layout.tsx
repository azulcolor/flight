'use client'

import { SwrFetcher } from '@/api/flight'
import { Header } from '@/components/header'
import { useRouter } from 'next/navigation'

export default function LoggedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { isLoading, error } = SwrFetcher('token')
  if (error) return router.push('/')
  if (isLoading) return <div></div>

  return (
    <section>
      <Header isLogged={true} />
      {children}
    </section>
  )
}
