import ContactInfo from '@/components/ContactInfo'

export default function Contact({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main className='overflow-hidden'>
      <ContactInfo isLogged={false} lang={lang} />
    </main>
  )
}
