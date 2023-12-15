interface IStates {
  name: string
  value: string | number
}

export interface FilterProps {
  value: string
  setValue: (value: string) => void
  label: string
  children: React.ReactNode
}

export interface FilterObjectProps extends Omit<FilterProps, 'children'> {
  options: IStates[]
}

export interface FilterArrayProps extends Omit<FilterProps, 'children'> {
  options: string[] | number[]
}
