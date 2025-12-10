import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../General.css';

export function SizedTextFields() {
  return (
    <div className='container'>
      <p className='header'>SIZED TEXT FIELDS</p>

      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete=''
      >
        <div>
          <TextField
            label='Size'
            id='filled-size-small'
            defaultValue="Small"
            size='small'
            variant='filled'
          />

          <TextField label='Size' id='standard-size-normal' defaultValue='Normal' variant='standard' />
        </div>

        <div>
          <TextField
            label='Size'
            id='outlined-size-small'
            defaultValue="Small"
            size='small'
          />

          <TextField label='Size' id='filled-size-normal' defaultValue='Normal' variant='filled' />
        </div>
      </Box>
    </div>
  );
}