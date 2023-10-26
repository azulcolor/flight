import './globals.css'
import type { Metadata } from 'next'
// import { Header } from '../components/header'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}
