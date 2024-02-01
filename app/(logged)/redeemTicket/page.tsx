'use client'

import DocumentInfo from '@/components/logged/redeemTicket/DocumentInfo'
import { NoRedeemAvailable, RedeemButton } from '@/components/logged/redeemTicket/InfoButton'
import { useCertificates } from '@/hooks/useCoupons'

export default function RedeemTicket() {
  const { certificates, loading } = useCertificates()

  if (loading) return <></>

  return (
    <>
      {certificates.length !== 0 ? <RedeemButton /> : <NoRedeemAvailable />}
      <div className='documents__status'>
        <DocumentInfo />
      </div>
    </>
  )
}
