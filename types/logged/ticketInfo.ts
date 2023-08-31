export interface ITicketInfo {
  default: IInfoStructure
  startProcess: IInfoStructure
  active: IInfoStructure
  approved: IInfoStructure
  refunded: IInfoStructure
  expired: IInfoStructure
  refused: IInfoStructure
  available: IInfoStructure
}

export interface IInfoStructure {
  title: string
  message: string
  image: string
  status: string
}

export interface IInfo {
  info: IInfoStructure
}