import Link from 'next/link'

export default function RegisterLinks({ dict, lang }: { dict: any; lang: string }) {
  return (
    <>
      <p className='text-center px-1 mt-4 lg:text-base w-72 lg:w-[523px] lg:px-5'>{dict.register.membershipAdvice}</p>

      <div className='flex flex-col lg:flex-row lg:items-center lg:mt-2'>
        <Link href={`/${lang}`} className='text-text text-sm text-center hover:text-secondary mt-4 lg:text-base lg:mt-0 lg:mr-3'>
          {dict.register.loginQuestion}
        </Link>
        <Link href={`/${lang}`} className='text-primary-100 text-sm text-center hover:text-secondary mt-2 lg:text-base lg:mt-0'>
          {dict.register.login}
        </Link>
      </div>

      <Link href={`/${lang}/contact`} className='text-secondary text-base text-center hover:text-secondary lg:text-lg mt-10'>
        {dict.register.contact}
      </Link>
    </>
  )
}
