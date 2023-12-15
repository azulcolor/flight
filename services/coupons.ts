import { flightApi } from '@/api'
import { ITicket } from '@/types/logged'
import { MutableRefObject, SetStateAction } from 'react'

export const getCertificates = (certificates: { current: string[] }) => {
  const certificatesValue = localStorage.getItem('certificates')
  const certificados = JSON.parse(certificatesValue || '[]')

  certificates.current = certificados
  certificates.current.unshift('Todos')
}

export const getUserCertificates = async (setCertificates: any) => {
  const certificates = await flightApi.get('coupons/certificates')
  setCertificates(certificates.data)
}

export const fetchCoupons = async (certificates: MutableRefObject<string[]>, setTickets: (value: SetStateAction<ITicket[]>) => void) => {
  try {
    const cupones = await flightApi.post('coupons', certificates.current)
    setTickets(cupones.data.cupons)
  } catch (error) {}
}

export const fetchCouponStatus = async (setStatus: any) => {
  try {
    const status = await flightApi.get('status/coupons')
    setStatus(status.data)
  } catch (error) {}
}

export const fetchAvailableCoupons = async (setTickets: (value: SetStateAction<ITicket[]>) => void, certificate: number) => {
  try {
    const coupons = await flightApi.get(`coupons/available/${certificate}`)
    setTickets(coupons.data)
  } catch (error) {}
}
