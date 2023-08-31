import { Dispatch, SetStateAction } from 'react'
import { IInfoStructure } from '.'

export default interface ITicketProps {
  value: string
  status: string
  color: string
  startDate: string
  endDate: string
  setInfo: Dispatch<SetStateAction<IInfoStructure>>
}

export interface ITicket {
  value: string
  status: string
  color: string
  startDate: string
  endDate: string
}
