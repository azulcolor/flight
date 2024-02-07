import { ICouponValor, Ibutton } from '@/types'

export default function Button({ children, buttonFunction }: Ibutton) {
  return (
    <button className='button' onClick={buttonFunction}>
      {children}
    </button>
  )
}

export function ButtonCupon({ buttonFunction, hasValor, redeem }: ICouponValor) {
  const buttonStyle = hasValor ? 'button__cupon--selected' : 'button__cupon'
  return (
    <button className={buttonStyle} onClick={buttonFunction}>
      {hasValor ? redeem.selectedCoupon : redeem.couponButton}
    </button>
  )
}

export function ButtonFile({ children, buttonFunction, hasValor }: ICouponValor) {
  const buttonStyle = hasValor ? 'button__file--selected' : 'button'
  return (
    <button className={buttonStyle} onClick={buttonFunction}>
      {children}
    </button>
  )
}
