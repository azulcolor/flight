import { flightApi } from '@/api'
import { ILoginApiResponse, IloginFunction } from '@/types/auth'
import Cookies from 'js-cookie'

const login: IloginFunction = async (userData, setError, lang) => {
  try {
    const response: ILoginApiResponse = await flightApi.post('login', userData)

    const { token, certificados } = response.data

    if (token) Cookies.set('token', token)
    if (certificados) localStorage.setItem('certificates', JSON.stringify(certificados))

    window.location.href = `/${lang}/tickets`
  } catch (error: any) {
    const { ok, message } = error.response.data

    setError({ ok, message })
  }
}

export default login
