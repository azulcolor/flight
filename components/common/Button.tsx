import { Ibutton } from '@/types'

export default function Button({ children, buttonFunction }: Ibutton) {
  return (
    <button className='button' onClick={buttonFunction}>
      {children}
    </button>
  )
}
