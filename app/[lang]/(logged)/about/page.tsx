import ContactInfo from '@/components/ContactInfo'

export default function About({ params }: { params: any }) {
  const { lang } = params
  return <ContactInfo isLogged={true} lang={lang} />
}
