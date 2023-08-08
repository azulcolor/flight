import { Dispatch, SetStateAction } from 'react'

export default interface Iinput {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  type: string
  placeholder: string
  focus?: boolean
}

export interface Ibutton {
  children: React.ReactNode
  buttonFunction: any
}
