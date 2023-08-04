import { Iinput } from '@/types'

export default function Input({ value, setValue, type, placeholder }: Iinput) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={true}
      autoFocus={true}
      value={value}
      className='input'
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
