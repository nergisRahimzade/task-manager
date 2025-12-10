import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../../General.css';

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  }
];

export function SelectTextFields() {
  return (
    <div className='container'>
      <p className='header'>SELECT TEXT FIELDS</p>

      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete='off'
      >
        <div>
          <TextField
            id='outlined-select-currency'
            select
            label='Select'
            defaultValue='USD'
            helperText='Please select your currency'
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id='outlined-select-currency-native'
            select
            label='Native select'
            defaultValue='USD'
            slotProps={{
              select: {
                native: true
              }
            }}
            helperText='Please select your currency'
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

        </div>

        <div>
          <TextField
            id='filled-select-currency'
            select
            label='Select'
            defaultValue='USD'
            helperText='Please select your currency'
            variant='filled'
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id='filled-select-currency-native'
            select
            label='Native select'
            defaultValue='USD'
            slotProps={{
              select: {
                native: true
              }
            }}
            helperText='Please select your currency'
            variant='filled'
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

        </div>

        <div>
          <TextField
            id='standard-select-currency'
            select
            label='Select'
            defaultValue='USD'
            helperText='Please select your currency'
            variant='standard'
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id='standard-select-currency-native'
            select
            label='Native select'
            defaultValue='USD'
            slotProps={{
              select: {
                native: true
              }
            }}
            helperText='Please select your currency'
            variant='standard'
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

        </div>

      </Box>
    </div>
  );
}