import { AxiosResponse } from 'axios'

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
}

interface IResetPasswordResponse {
  succesful: boolean
}

export type IforgotPasswordFunction = (userData: IForgotPasswordRequest) => Promise<IResetPasswordResponse>
export type IforgotPasswordApiResponse = AxiosResponse<IForgotPasswordResponse>

export type IResetPasswordFunction = (userData: IResetPasswordRequest) => Promise<IResetPasswordResponse>
export type IResetPasswordApiResponse = AxiosResponse<IResetPasswordResponse>
