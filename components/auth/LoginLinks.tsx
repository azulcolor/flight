import Link from 'next/link'

export default function LoginLinks({ dict, lang }: { dict: any; lang: string }) {
  return (
    <>
      <Link href={`${lang}/forgot`} className='text-text text-sm text-center hover:text-secondary mt-4 lg:text-base'>
        {dict.authLinks.forgot}
      </Link>

      <div className='flex flex-col lg:flex-row lg:items-center lg:mt-2'>
        <Link href={`${lang}/register`} className='text-text text-sm text-center hover:text-secondary mt-4 lg:text-base lg:mt-0 lg:mr-3'>
          {dict.authLinks.registerQuestion}
        </Link>
        <Link href={`${lang}/register`} className='text-primary-100 text-sm text-center hover:text-secondary mt-2 lg:text-base lg:mt-0'>
          {dict.authLinks.register}
        </Link>
      </div>

      <Link href={`${lang}/contact`} className='text-secondary text-base text-center hover:text-secondary lg:text-lg mt-10'>
        {dict.authLinks.contact}
      </Link>
    </>
  )
}
