import { AxiosResponse } from 'axios'
import { SetError } from '..'

interface ILoginRequest {
  username: string
  password: string
}
interface ILoginResponse {
  ok: boolean
  token?: string
  message?: string
  certificados?: string[]
}

export type IloginFunction = (userData: ILoginRequest, setError: SetError, lang: string) => Promise<void>
export type ILoginApiResponse = AxiosResponse<ILoginResponse>
