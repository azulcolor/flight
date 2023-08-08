export default function Ticket() {
  const elementosRepetidos = Array.from({ length: 9 }, (_, index) => <div key={index} className='w-6 h-[1.3px] bg-title'></div>)

  return (
    <div className='bg-start-card w-72 h-48 rounded-3xl px-2 pt-6 pb-7 flex flex-col justify-between'>
      <div className='grid grid-cols-5 items-center px-3'>
        <p className=' text-background text-xl col-span-2'>$420 USD</p>
        <p className='text-background text-sm col-span-3 text-right'>Cupón: Inicia trámite</p>
      </div>
      <div className='flex justify-between'>{elementosRepetidos}</div>
      <div>
        <div>
          <p className='text-background'>Valido de</p>
          <p className=' text-[10px] text-background'>18 septiembre 2020 al 30 agosto 2027</p>
        </div>
      </div>
    </div>
  )
}
