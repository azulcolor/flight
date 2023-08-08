import { IRegisterFunction, IRegisterApiResponse } from '@/types/auth'
import { flightApi } from '@/api'

const register: IRegisterFunction = async (userData) => {
  try {
    const response: IRegisterApiResponse = await flightApi.post('register', {
      userData,
    })

    const { succesful, message } = response.data

    return {
      succesful,
      message,
    }
  } catch (error) {
    throw new Error('Error while registering')
  }
}

export default register
