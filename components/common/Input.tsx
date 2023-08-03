import { input } from '@/types'

export default function Input({ value, setValue, type, placeholder }: input) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={true}
      autoFocus={true}
      value={value}
      className='border rounded-lg border-text text-text w-72 h-10 pl-4'
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
