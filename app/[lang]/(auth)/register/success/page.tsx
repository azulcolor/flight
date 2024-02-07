import { getDictionary } from '@/app/[lang]/dictionaries'
import { routes } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Success({ params: { lang } }: { params: { lang: string } }) {
  const { success } = getDictionary(lang).register

  return (
    <div className='column__center justify-center h-[82vh]'>
      <Image src='/images/good.png' alt='success' className='w-80' width={1200} height={1200} />
      <h2 className='text-2xl mb-8 mt-3'>{success.title}</h2>
      <p className='text-base mb-10'>{success.message}</p>
      <Link href={routes(lang).login} className='button flex justify-center items-center'>
        {success.back}
      </Link>
    </div>
  )
}
