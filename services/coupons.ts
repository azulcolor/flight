import { flightApi } from '@/api'
import { ITicket } from '@/types/logged'
import { MutableRefObject, SetStateAction } from 'react'

export const getCertificates = (certificates: { current: string[] }, all: string) => {
  const certificatesValue = localStorage.getItem('certificates')
  const certificados = JSON.parse(certificatesValue || '[]')

  certificates.current = certificados
  certificates.current.unshift(all)
}

export const getUserCertificates = async (setCertificates: any) => {
  const certificates = await flightApi.get('coupons/certificates')
  setCertificates(certificates.data)
}

export const getAvailableCertificates = async (setCertificates: any, setLoading: any) => {
  const certificates = await flightApi.get('documents/certificates')
  setCertificates(certificates.data)
  setLoading(false)
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
    console.log(status.data)
    setStatus(status.data)
  } catch (error) {}
}

export const fetchActiveCoupons = async (setTickets: (value: SetStateAction<ITicket[]>) => void, certificate: number) => {
  try {
    const coupons = await flightApi.get(`coupons/active/${certificate}`)
    setTickets(coupons.data)
  } catch (error) {}
}
