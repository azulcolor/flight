import Link from 'next/link'
import AddBoxIcon from '@mui/icons-material/AddBox'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SmartToyIcon from '@mui/icons-material/SmartToy'

interface Props {
  href: string
  children: React.ReactNode
}

interface IProps {
  redeem: any
  lang: string
}

function Button({ href, children }: Props) {
  return (
    <Link href={href}>
      <div className='button_info'>{children}</div>
    </Link>
  )
}

export function RedeemButton({ redeem, lang }: IProps) {
  return (
    <Button href={`/${lang}/redeemTicket/form`}>
      <p className='text-white'>{redeem.true}</p>
      <AddBoxIcon className='text-white' fontSize='large' />
    </Button>
  )
}

export function SendingsButton({ redeem, lang }: IProps) {
  return (
    <Button href={`/${lang}/redeemTicket`}>
      <p className='text-white'>{redeem.shipments}</p>
      <VisibilityIcon className='text-white' fontSize='large' />
    </Button>
  )
}

export function NoRedeemAvailable({ redeem, lang }: IProps) {
  return (
    <Button href={`/${lang}`}>
      <p className='text-white'>{redeem.false}</p>
      <SmartToyIcon className='text-white' fontSize='large' />
    </Button>
  )
}
