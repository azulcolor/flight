import { IRegisterFunction } from '@/types/auth'
import { flightApi } from '@/api'

const register: IRegisterFunction = async (userData, setError) => {
  try {
    const token = await flightApi.post('register', userData)

    window.location.href = `/register/${token.data}`
  } catch (error: any) {
    const { ok, message } = error.response.data

    setError({ ok, message })
  }
}

export const secondRegister = async (token: string) => {
  try {
    const response = await flightApi.post('registerAuth', { token })

    return response.data
  } catch (error: any) {
    const { ok, message } = error.response.data

    return { ok, message }
  }
}

export default register
