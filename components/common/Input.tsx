import { Iinput } from '@/types'

export default function Input({ value, setValue, type, placeholder, focus = false }: Iinput) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={true}
      autoFocus={focus}
      value={value}
      className='input'
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
