'use client'

import DocumentInfo from '@/components/logged/redeemTicket/DocumentInfo'
import { NoRedeemAvailable, RedeemButton } from '@/components/logged/redeemTicket/InfoButton'
import { useCertificates } from '@/hooks/useCoupons'
import { getDictionary } from '../../dictionaries'

export default function RedeemTicket({ params }: { params: any }) {
  const { certificates, loading } = useCertificates()
  const { lang } = params
  const { redeem } = getDictionary(lang)
  const param = { redeem, lang }

  if (loading) return <></>

  return (
    <>
      {certificates.length !== 0 ? <RedeemButton {...param} /> : <NoRedeemAvailable {...param} />}
      <div className='documents__status'>
        <DocumentInfo {...param} />
      </div>
    </>
  )
}
