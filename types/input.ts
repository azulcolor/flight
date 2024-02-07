import { Dispatch, SetStateAction } from 'react'

export default interface Iinput {
  value: string | number
  name?: string
  setValue: Dispatch<SetStateAction<any>>
  type: string
  placeholder: string
  focus?: boolean
  setError?: SetError
}

export interface ISelect {
  setValue: Dispatch<SetStateAction<string>>
  values: Options[]
}

interface Options {
  value: string
  label: string
}

export interface IError {
  ok: boolean
  message: string
}

export type SetError = Dispatch<SetStateAction<IError>>

export interface Ibutton {
  children?: React.ReactNode
  buttonFunction: any
}

export interface ICouponValor extends Ibutton {
  hasValor: boolean
  redeem: any
}
