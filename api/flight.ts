import axios from 'axios'
import Cookies from 'js-cookie'
import useSWR from 'swr'

const token = Cookies.get('token')

let lang = Cookies.get('lang') || 'es'

const host = process.env.FLIGHT_API_URL

const flightApi = axios.create({
  baseURL: host,
  headers: {
    Authorization: `Bearer ${token}`,
    Lang: lang,
  },
})

export const flightPatch = async (url: string, body: object, redirect: string, setError?: any) => {
  try {
    await flightApi.patch(url, body)

    window.location.href = redirect
  } catch (error: any) {
    setError({ ok: false, message: error.response.data.message })
  }
}

export const fetcher = async (url: string) => {
  const res = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
  return res.data
}

export const SwrFetcher = (url: string) => {
  return useSWR(`${host}${url}`, fetcher)
}

export default flightApi
