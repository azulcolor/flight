import { Ticket } from '@/components/tickets'
import tickets from '@/utils/constants/tickets'

export default function Tickets() {
  return (
    <div className='ticket__page'>
      <div className='tickets'>
        {tickets.map((ticket, index) => (
          <Ticket key={index} {...ticket} />
        ))}
      </div>
      <p className=' lg:col-span-2'>info</p>
    </div>
  )
}
