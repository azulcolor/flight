import { Iinput } from '@/types'

export default function Input({ value, setValue, type, placeholder, focus = false, setError }: Iinput) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    if (setError) setError({ ok: true, message: '' })
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      required={true}
      autoFocus={focus}
      value={value}
      className='input'
      onChange={(e) => handleInput(e)}
    />
  )
}
