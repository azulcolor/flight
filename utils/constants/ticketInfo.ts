/* eslint-disable quotes */
import { ITicketInfo } from '@/types/logged'

const ticketInfoEs: ITicketInfo = {
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

const ticketInfoEn: ITicketInfo = {
  default: {
    title: 'Welcome to Flight!',
    message:
      'To begin viewing the information of your coupons, you should click on the one you want to see, and its information will appear in this section.',
    image: '/images/good.png',
    status: 'default',
  },
  startProcess: {
    title: 'In processing!',
    message: 'We are verifying that everything is in order and meets the requirements. If you have any questions, you can contact us. ',
    image: '/images/good.png',
    status: 'startProcess',
  },
  active: {
    title: 'Everything looks good!',
    message: `Contact us to change the coupon. Don't forget that your certificate is: `,
    image: '/images/good.png',
    status: 'active',
  },
  approved: {
    title: 'Your coupon was approved!',
    message: 'Congratulations! See you next year so you can redeem another coupon.',
    image: '/images/good.png',
    status: 'approved',
  },
  refunded: {
    title: 'Your coupon was refunded!',
    message: 'Congratulations! Your coupon was successfully refunded.',
    image: '/images/good.png',
    status: 'refunded',
  },
  expired: {
    title: 'The coupon has expired!',
    message: `But don't worry, you can try with the other coupons.`,
    image: '/images/bad.png',
    status: 'expired',
  },
  refused: {
    title: 'Unfulfilled Requirements',
    message: 'Do you have any questions? Feel free to contact us.',
    image: '/images/bad.png',
    status: 'refused',
  },
  available: {
    title: 'Too soon!',
    message: `It's not yet the date to use the coupon. Could you take a look at other coupons?`,
    image: '/images/bad.png',
    status: 'available',
  },
}

const ticketInfo = (leng: string): ITicketInfo => {
  if (leng === 'es') {
    return ticketInfoEs
  } else {
    return ticketInfoEn
  }
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

export const ticketTest = [
  {
    id: 7,
    name: 'active',
  },
  {
    id: 8,
    name: 'revision',
  },
  {
    id: 9,
    name: 'used',
  },
  {
    id: 10,
    name: 'expired',
  },
  {
    id: 11,
    name: 'refused',
  },
  {
    id: 12,
    name: 'approved',
  },
  {
    id: 13,
    name: 'available',
  },
  {
    id: 14,
    name: 'refunded',
  },
  {
    id: 37,
    name: 'startProcess',
  },
]

export default ticketInfo
