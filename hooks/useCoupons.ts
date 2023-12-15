import { ITicket } from '@/types/logged'
import { fetchCoupons, getCertificates, fetchAvailableCoupons } from '@/services'
import { useEffect, useRef, useState } from 'react'
import { fetchCouponStatus, getUserCertificates } from '@/services/coupons'

export const useCoupons = () => {
  const certificates = useRef<string[]>([])
  const [tickets, setTickets] = useState<ITicket[]>([])
  const [status, setStatus] = useState([])

  useEffect(() => {
    getCertificates(certificates)
    fetchCoupons(certificates, setTickets)
    fetchCouponStatus(setStatus)
  }, [])

  return { tickets, certificates, setTickets, status }
}

export const useAvailableCoupons = (certificate: number) => {
  const [tickets, setTickets] = useState<ITicket[]>([])

  useEffect(() => {
    fetchAvailableCoupons(setTickets, certificate)
  }, [certificate])

  return { tickets, setTickets }
}

export const useCertificates = () => {
  const [certificates, setCertificates] = useState<string[]>([])

  useEffect(() => {
    getUserCertificates(setCertificates)
  }, [])

  return { certificates, setCertificates }
}
