import { flightApi } from '@/api'
import { ILoginApiResponse, IloginFunction } from '@/types/auth'
import Cookies from 'js-cookie'

const login: IloginFunction = async (userData) => {
  try {
    const response: ILoginApiResponse = await flightApi.post('login', {
      userData,
    })

    const { succesful, token } = response.data

    Cookies.set('token', 'test')

    window.location.href = '/tickets'

    return {
      succesful,
      token,
    }
  } catch (error) {
    Cookies.set('token', 'test')
    window.location.href = '/tickets'
    throw new Error('Error while logging in')
  }
}

export default login
