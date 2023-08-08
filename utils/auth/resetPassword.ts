import { IforgotPasswordApiResponse, IforgotPasswordFunction, IResetPasswordApiResponse, IResetPasswordFunction } from '@/types/auth'
import { flightApi } from '@/api'

export const forgotPassword: IforgotPasswordFunction = async (userData) => {
  try {
    const response: IforgotPasswordApiResponse = await flightApi.post('forgot-password', {
      userData,
    })

    const { succesful, message } = response.data

    return {
      succesful,
      message,
    }
  } catch (error) {
    throw new Error('Error while sending reset password email')
  }
}

export const resetPassword: IResetPasswordFunction = async (userData) => {
  try {
    const response: IResetPasswordApiResponse = await flightApi.post('reset-password', {
      userData,
    })

    const { succesful } = response.data

    return { succesful }
  } catch (error) {
    throw new Error('Error while resetting password')
  }
}
