import { AxiosResponse } from 'axios'
import { SetError } from '..'

interface IForgotPasswordRequest {
  email: string
}

interface IForgotPasswordResponse {
  succesful: boolean
  message: string
}

interface IResetPasswordRequest {
  password: string
  repeatPassword: string
  token: string
}

interface IResetPasswordResponse {
  succesful: boolean
}

export type IforgotPasswordFunction = (userData: IForgotPasswordRequest, lang: string) => Promise<IResetPasswordResponse>
export type IforgotPasswordApiResponse = AxiosResponse<IForgotPasswordResponse>

export type IResetPasswordFunction = (userData: IResetPasswordRequest, setError: SetError, lang: String) => Promise<void>
export type IResetPasswordApiResponse = AxiosResponse<IResetPasswordResponse>
