import { ITicketProps } from '@/types/logged'

export const tickets: ITicketProps[] = [
  {
    value: '320',
    status: 'Inicia trámite',
    color: 'start',
    startDate: '28 de febrero 2012',
    endDate: '30 de octubre 2027',
  },
  {
    value: '500',
    status: 'Aprovado',
    color: 'approved',
    startDate: '18 de enero 2013',
    endDate: '30 de enero 2030',
  },
  {
    value: '100',
    status: 'Activo',
    color: 'active',
    startDate: '03 de junio 2015',
    endDate: '30 de junio 2025',
  },
  {
    value: '300',
    status: 'Activo',
    color: 'active',
    startDate: '09 de noviembre 2013',
    endDate: '21 de julio 2025',
  },
  {
    value: '200',
    status: 'Disponible',
    color: 'available',
    startDate: '04 de abril 2014',
    endDate: '31 de diciembre 2027',
  },
  {
    value: '260',
    status: 'Disponible',
    color: 'available',
    startDate: '28 de febrero 2012',
    endDate: '21 de marzo 2027',
  },
  {
    value: '320',
    status: 'Disponible',
    color: 'available',
    startDate: '22 de febrero 2015',
    endDate: '01 de enero 2022',
  },
  {
    value: '500',
    status: 'Reembolsable',
    color: 'refunded',
    startDate: '18 de enero 2013',
    endDate: '30 de julio 2030',
  },
  {
    value: '430',
    status: 'Expirado',
    color: 'expired',
    startDate: '03 de junio 2015',
    endDate: '30 de junio 2025',
  },
  {
    value: '300',
    status: 'Rechazado',
    color: 'refused',
    startDate: '09 de noviembre 2013',
    endDate: '21 de julio 2025',
  },
]

export default tickets
