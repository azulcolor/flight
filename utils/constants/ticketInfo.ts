import { ITicketInfo } from '@/types/logged'

const ticketInfo: ITicketInfo = {
  default: {
    title: '¡Bienvenido a Flight',
    message:
      'Para comenzar a ver la información de tus cupones deberás presionar el que quieras ver y en esta parte aparecerá su información.',
    image: '/images/good.png',
    status: 'default',
  },
  startProcess: {
    title: '¡En proceso de trámite!',
    message:
      'Se está verificando que todo esté en orden y se cumplan con los requerimeintos. Sí tienes alguna duda te puedes poner en contacto con nosotros. ',
    image: '/images/good.png',
    status: 'startProcess',
  },
  active: {
    title: '¡Todo luce bien!',
    message: 'Ponte en contacto con nosotros para cambiar el cupon. No olvides que tu certificado es: ',
    image: '/images/good.png',
    status: 'active',
  },
  approved: {
    title: '¡Tu cupón fue aprovado!',
    message: '¡Felicidades! Nos vemos el próximo año para que puedas canjear otro cupón',
    image: '/images/good.png',
    status: 'approved',
  },
  refunded: {
    title: '¡Tu cupón fue reembolsado!',
    message: '¡Felicidades! Tu cupón fue reembolsado con éxito',
    image: '/images/good.png',
    status: 'refunded',
  },
  expired: {
    title: '¡El cupón ha expirado!',
    message: 'Pero no te preocupes, puedes probar con los demás cupones',
    image: '/images/bad.png',
    status: 'expired',
  },
  refused: {
    title: 'Requisitos no cumplidos',
    message: '¿Tienes dudas? No dudes en contactarnos',
    image: '/images/bad.png',
    status: 'refused',
  },
  available: {
    title: '¡Demasiado pronto!',
    message: 'Aún no es la fecha para utilizar el cupón. Podrías dar un vistazo a otros cupones',
    image: '/images/bad.png',
    status: 'available',
  },
}

export const ticketStatus = [
  'green',
  'yellow',
  'red',
  'blue',
  'purple',
  'orange',
  'active',
  'dfg1',
  'dfg2',
  'expired',
  'refused',
  'fdgdfg',
  'available',
  'refunded',
  'ertert',
]

export default ticketInfo
