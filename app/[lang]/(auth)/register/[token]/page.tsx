import { secondRegister } from '@/utils/auth/register'
import Image from 'next/image'
import { routes } from '@/utils/constants'
import Link from 'next/link'
import { getDictionary } from '@/app/[lang]/dictionaries'

async function getData(token: string) {
  const response = secondRegister(token)

  return response
}

export default async function SecondRegister({ params }: { params: { token: string; lang: string } }) {
  const { lang, token } = params

  const data = await getData(token)
  const { secondStep } = getDictionary(lang)

  if (data.ok === false) {
    return (
      <div className='column__center justify-center h-[82vh]'>
        <Image src='/images/bad.png' alt='success' className='w-80' width={1200} height={1200} />
        <h2 className='text-2xl mb-8 mt-3'>{secondStep.unsuccess.title}</h2>
        <Link href={routes(lang).login} className='button flex justify-center items-center'>
          {secondStep.unsuccess.login}
        </Link>
      </div>
    )
  }

  return (
    <div className='column__center justify-center h-[82vh]'>
      <Image src='/images/good.png' alt='success' className='w-80' width={1200} height={1200} />
      <h2 className='text-2xl mb-8 mt-3'>{secondStep.success.title}</h2>
      <p className='text-base mb-10'>{secondStep.success.message}</p>
      <Link href={routes(lang).login} className='button flex justify-center items-center'>
        {secondStep.success.login}
      </Link>
    </div>
  )
}
