import { IforgotPasswordApiResponse, IforgotPasswordFunction, IResetPasswordFunction } from '@/types/auth'
import { flightApi } from '@/api'

export const forgotPassword: IforgotPasswordFunction = async (userData, lang) => {
  try {
    const response: IforgotPasswordApiResponse = await flightApi.post('sendEmail', userData)

    console.log(response)

    const { succesful, message } = response.data

    window.location.href = `/${lang}`

    return {
      succesful,
      message,
    }
  } catch (error) {
    throw new Error('Error while sending reset password email')
  }
}

export const resetPassword: IResetPasswordFunction = async (userData, setError, lang) => {
  try {
    const url = 'resetPassword'
    await flightApi.patch(url, userData)

    window.location.href = `/${lang}`
  } catch (error: any) {
    console.log(error)
    const { ok, message } = error.response.data

    setError({ ok, message })
    throw new Error('Error while resetting password')
  }
}
