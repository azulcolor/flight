import { ISelect } from '@/types'

export default function Select({ setValue, values }: ISelect) {
  return (
    <select className='input' onChange={(e) => setValue(e.target.value)}>
      {values.map((value) => (
        <option value={value.value} key={value.value}>
          {value.label}
        </option>
      ))}
    </select>
  )
}
