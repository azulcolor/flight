import { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import { IInfoStructure } from '.'

export interface ITicket {
  id: number
  value: string
  status: number
  nombreStatus: string
  color: string
  fecha_inicio: string
  fecha_fin: string
  id_certificado: number
  numero_cupon: number
}

export interface ITicketHead {
  value: string
  status: string
  certificate: number
  number: number
}

export interface ITicketFoot {
  startDate: string
  endDate: string
}

export default interface ITicketProps extends ITicket {
  setInfo: Dispatch<SetStateAction<IInfoStructure>>
}

export interface IAvailableCouponProps extends ITicket {
  onClick: MouseEventHandler<HTMLDivElement>
}
