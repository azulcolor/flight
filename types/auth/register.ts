import { AxiosResponse } from 'axios'
import { SetError } from '..'

interface IRegisterRequest {
  username: string
  password: string
  membership: string
  fullname: string
  language: string
  email: string
}
interface IRegisterResponse {
  ok: boolean
  message: string
}

export type IRegisterFunction = (userData: IRegisterRequest, setError: SetError, lang: string) => Promise<void>
export type IRegisterApiResponse = AxiosResponse<IRegisterResponse>
