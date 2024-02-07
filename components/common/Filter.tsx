import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { FilterArrayProps, FilterObjectProps, FilterProps } from '@/types/logged'

function Filter({ value, setValue, label, children }: FilterProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant='standard'>
        <InputLabel id='filter'>{label}</InputLabel>
        <Select labelId='filter' id='filter' value={value} label={label} onChange={handleChange}>
          {children}
        </Select>
      </FormControl>
    </Box>
  )
}

export function FilterObject({ value, setValue, label, options }: FilterObjectProps) {
  console.log(options)
  return (
    <Filter value={value} setValue={setValue} label={label}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </Filter>
  )
}

export function FilterArray({ value, setValue, label, options }: FilterArrayProps) {
  return (
    <Filter value={value} setValue={setValue} label={label}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Filter>
  )
}
