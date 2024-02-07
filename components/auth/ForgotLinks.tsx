import Link from 'next/link'
import { routes } from '@/utils/constants'

export default function ForgotLinks({ forgot, lang }: { forgot: any; lang: string }) {
  const route = routes(lang)

  return (
    <>
      <div className='flex flex-col lg:flex-row lg:items-center lg:mt-6'>
        <Link href={route.register} className='text-text text-sm text-center hover:text-secondary mt-4 lg:text-base lg:mt-0 lg:mr-3'>
          {forgot.loginQuestion}
        </Link>
        <Link href={route.login} className='text-primary-100 text-sm text-center hover:text-secondary mt-2 lg:text-base lg:mt-0'>
          {forgot.login}
        </Link>
      </div>

      <Link href={route.contact} className='text-secondary text-base text-center hover:text-secondary lg:text-lg mt-10'>
        {forgot.contact}
      </Link>
    </>
  )
}
