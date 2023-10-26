import { Header } from '@/components/header'

export default function loggedLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header isLogged={true} />
      {children}
    </section>
  )
}
