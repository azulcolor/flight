import DocumentInfo from '@/components/logged/redeemTicket/DocumentInfo'
import { RedeemButton } from '@/components/logged/redeemTicket/InfoButton'

const dataTest = [
  {
    status: 'approved',
    statusName: 'En revisión',
  },
  {
    status: 'active',
    statusName: 'Rechazado',
  },
  {
    status: 'grayCard',
    statusName: 'En proceso',
  },
]

export default function RedeemTicket() {
  return (
    <>
      <RedeemButton />
      <div className='documents__status'>
        {dataTest.map((data) => (
          <DocumentInfo status={data.status} statusName={data.statusName} key={data.status} />
        ))}
      </div>
    </>
  )
}
