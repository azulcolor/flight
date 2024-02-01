import { flightApi } from '@/api'
import Cookies from 'js-cookie'

const useAuth = () => {
  const handleLogout = () => {
    Cookies.remove('token')
    window.location.href = '/auth/login'
  }

  return {
    handleLogout,
  }
}
export const isLogged = async () => {
  try {
    const { data } = await flightApi.get('/token')
    const { ok } = data
    if (!ok) {
      return false
    }
    return true
  } catch (error) {
    return false
  }
}

export default useAuth
