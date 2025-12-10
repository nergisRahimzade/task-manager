import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import '../../General.css';

export function IconedTextFields() {
  return (
    <div className='container'>
      <p className='header'>ICONED TEXT FIELDS</p>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <FormControl variant='standard'>
          <InputLabel htmlFor='input-with-icon-adornment'>
            With a start adornment
          </InputLabel>
          <Input
            id='input-with-icon-adornment'
            startAdornment={
              <InputAdornment position='end'>
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>

        <TextField
          id='input-with-icon-textfield' 
          label='Text Field'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              )
            }
          }}
          variant='standard'
        />

        <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5}} />
          <TextField id='input-with-sx' label='With sx' variant='standard' />
        </Box>
      </Box>
    </div>
  );
}