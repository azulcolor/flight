import { IRegisterFunction } from '@/types/auth'
import { flightApi } from '@/api'

const register: IRegisterFunction = async (userData, setError) => {
  try {
    await flightApi.post('register', userData)

    window.location.href = '/'
  } catch (error: any) {
    const { ok, message } = error.response.data

    setError({ ok, message })
  }
}

export default register
