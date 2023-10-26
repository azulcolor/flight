import { Header } from '@/components/header'

export default function loggedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header isLogged={false} />
      {children}
    </>
  )
}
