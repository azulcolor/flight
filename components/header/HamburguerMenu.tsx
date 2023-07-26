export default function HamburguerMenu() {
  return (
    <div className='flex flex-col gap-2 lg:hidden'>
      <div className='w-6 h-0.5 bg-title'></div>
      <div className='w-4 h-0.5 bg-title self-end'></div>
      <div className='w-6 h-0.5 bg-title'></div>
    </div>
  )
}
