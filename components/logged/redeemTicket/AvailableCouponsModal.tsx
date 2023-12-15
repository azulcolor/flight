import { useAvailableCoupons } from '@/hooks/useCoupons'
import { Box, Modal } from '@mui/material'
import { AvailableCoupon } from '../tickets/Ticket'

export default function AvailableCouponsModal({ isModalOpen, setIsModalOpen, certificate, setIdCoupons }: any) {
  var { tickets, setTickets } = useAvailableCoupons(certificate)

  const onClick = (idCoupon: number) => {
    setIdCoupons((prevIdCoupons: any) => ({ ...prevIdCoupons, [certificate]: idCoupon }))
    setTickets([])
    setIsModalOpen(false)
  }

  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Box className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen bg-white border border-black shadow-lg p-4 h-full overflow-y-auto'>
        <div className='flex flex-col pt-14 px-7'>
          <h1 className='text-2xl text-center mb-11 text-title'>Selecciona el cupón que quieras utilizar</h1>
          <h4 className='text-center mb-10'>Recuerda que sólo puedes escoger un cupón por certificado</h4>
          <div className='tickets no-scrollbar'>
            {tickets.map((ticket, index) => (
              <AvailableCoupon key={index} {...ticket} onClick={() => onClick(ticket.id)} />
            ))}
          </div>
        </div>
      </Box>
    </Modal>
  )
}