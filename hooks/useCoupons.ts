import { ITicket } from '@/types/logged'
import { fetchCoupons, getCertificates, fetchActiveCoupons } from '@/services'
import { useEffect, useRef, useState } from 'react'
import { fetchCouponStatus, getAvailableCertificates } from '@/services/coupons'

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

export const useActiveCoupons = (certificate: number) => {
  const [tickets, setTickets] = useState<ITicket[]>([])

  useEffect(() => {
    fetchActiveCoupons(setTickets, certificate)
  }, [certificate])

  return { tickets, setTickets }
}

export const useCertificates = () => {
  const [loading, setLoading] = useState(true)
  const [certificates, setCertificates] = useState<string[]>([])

  useEffect(() => {
    getAvailableCertificates(setCertificates, setLoading)
  }, [])

  return { certificates, setCertificates, loading }
}
