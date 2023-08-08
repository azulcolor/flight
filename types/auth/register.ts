import { AxiosResponse } from 'axios'

interface IRegisterRequest {
  email: string
  password: string
  membership: string
}
interface IRegisterResponse {
  succesful: boolean
  message: string
}

export type IRegisterFunction = (userData: IRegisterRequest) => Promise<IRegisterResponse>
export type IRegisterApiResponse = AxiosResponse<IRegisterResponse>
