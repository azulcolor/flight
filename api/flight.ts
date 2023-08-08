import axios from 'axios'

export const flightApi = axios.create({
  baseURL: process.env.API_ROUTE,
})

export default flightApi
