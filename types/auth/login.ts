import { AxiosResponse } from 'axios'

interface ILoginRequest {
  email: string
  password: string
}
interface ILoginResponse {
  succesful: boolean
  token: string
}

export type IloginFunction = (userData: ILoginRequest) => Promise<ILoginResponse>
export type ILoginApiResponse = AxiosResponse<ILoginResponse>
