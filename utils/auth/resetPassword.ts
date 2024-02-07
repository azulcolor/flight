import { IforgotPasswordApiResponse, IforgotPasswordFunction, IResetPasswordFunction } from '@/types/auth'
import { flightApi } from '@/api'

export const forgotPassword: IforgotPasswordFunction = async (userData, lang) => {
  try {
    window.location.href = `/${lang}/forgot/reset`

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

export const resetPassword: IResetPasswordFunction = async (userData, token, setError) => {
  try {
    const url = `resetPassword?token=${token}`
    await flightApi.patch(url, userData)

    window.location.href = '/'
  } catch (error: any) {
    const { ok, message } = error.response.data

    setError({ ok, message })
    throw new Error('Error while resetting password')
  }
}
