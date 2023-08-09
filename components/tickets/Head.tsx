export default function Head({ value, status }: { value: string; status: string }) {
  return (
    <div className='head__container'>
      <p className='value'>${value} USD</p>
      <p className='status'>Cupón: {status}</p>
    </div>
  )
}
