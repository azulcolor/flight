import { Iinput } from '@/types'

export default function UpdateInput({ value, setValue, type, placeholder, focus = false, setError, name }: Iinput) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))

    if (setError) setError({ ok: true, message: '' })
  }

  return (
    <div className='flex flex-col'>
      <label className='label'>{placeholder}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={true}
        autoFocus={focus}
        value={value}
        className='input text-title'
        name={name}
        onChange={(e) => handleInput(e)}
      />
    </div>
  )
}
