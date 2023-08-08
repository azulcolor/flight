import { flightApi } from '@/api'
import { ILoginApiResponse, IloginFunction } from '@/types/auth'

const login: IloginFunction = async (userData) => {
  try {
    const response: ILoginApiResponse = await flightApi.post('login', {
      userData,
    })

    const { succesful, token } = response.data

    return {
      succesful,
      token,
    }
  } catch (error) {
    throw new Error('Error while logging in')
  }
}

export default login
