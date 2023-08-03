import { Dispatch, SetStateAction } from 'react'

export default interface Input {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  type: string
  placeholder: string
}
