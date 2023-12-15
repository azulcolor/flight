import Link from 'next/link'
import AddBoxIcon from '@mui/icons-material/AddBox'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SmartToyIcon from '@mui/icons-material/SmartToy'

interface Props {
  href: string
  children: React.ReactNode
}

function Button({ href, children }: Props) {
  return (
    <Link href={href}>
      <div className='button_info'>{children}</div>
    </Link>
  )
}

export function RedeemButton() {
  return (
    <Button href={'/redeemTicket/form'}>
      <p className='text-white'>Canjear cupones</p>
      <AddBoxIcon className='text-white' fontSize='large' />
    </Button>
  )
}

export function SendingsButton() {
  return (
    <Button href={'/redeemTicket'}>
      <p className='text-white'>Ver envíos</p>
      <VisibilityIcon className='text-white' fontSize='large' />
    </Button>
  )
}

export function NoRedeemAvailable() {
  return (
    <Button href='/'>
      <p className='text-white'>No tienes más envíos</p>
      <SmartToyIcon className='text-white' fontSize='large' />
    </Button>
  )
}
