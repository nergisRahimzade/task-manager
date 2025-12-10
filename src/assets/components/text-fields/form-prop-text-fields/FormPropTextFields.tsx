import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../General.css';

export function FormPropTextFields() {
  return (
    <div className='container'>
      <p className='header'>FORM PROP TEXT FIELDS</p>

      <Box
        component='form'
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete='off'
      >

        <div>
          <TextField
            required
            id='outlined-required'
            label='Required'
            defaultValue="Hello World"
          />

          <TextField
            disabled
            id='outlined-disabled'
            label='Disabled'
            defaultValue="Hello World"
          />

          <TextField
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete="current-password"
          />

          <TextField
            id='outlined-read-only-input'
            label='Read Only'
            defaultValue="Hello World"
            slotProps={{
              input: {
                readOnly: true,
              }
            }}
          />

          <TextField
            required
            id='outlined-search'
            label='Search field'
            type='search'
          />

          <TextField
            id='outlined-helperText'
            label='Helper Text'
            defaultValue="Default value"
            helperText='Some important text'
          />
        </div>

        <div>
          <TextField
            required
            id='filled-required'
            label='Required'
            defaultValue="Hello World"
            variant='filled'
          />

          <TextField
            disabled
            id='filled-disabled'
            label='Disabled'
            defaultValue="Hello World"
            variant='filled'
          />

          <TextField
            id='filled-password-input'
            label='Password'
            type='password'
            autoComplete="current-password"
            variant='filled'
          />

          <TextField
            id='filled-read-only-input'
            label='Read Only'
            defaultValue="Hello World"
            variant='filled'
            slotProps={{
              input: {
                readOnly: true,
              }
            }}
          />

          <TextField
            required
            id='filled-search'
            label='Search field'
            type='search'
            variant='filled'
          />

          <TextField
            id='filled-helperText'
            label='Helper Text'
            defaultValue="Default value"
            helperText='Some important text'
            variant='filled'
          />
        </div>

        <div>
          <TextField
            required
            id='standard-required'
            label='Required'
            defaultValue="Hello World"
            variant='standard'
          />

          <TextField
            disabled
            id='standard-disabled'
            label='Disabled'
            defaultValue="Hello World"
            variant='standard'
          />

          <TextField
            id='standard-password-input'
            label='Password'
            type='password'
            autoComplete="current-password"
            variant='standard'
          />

          <TextField
            id='standard-read-only-input'
            label='Read Only'
            defaultValue="Hello World"
            variant='standard'
            slotProps={{
              input: {
                readOnly: true,
              }
            }}
          />

          <TextField
            required
            id='standard-search'
            label='Search field'
            type='search'
            variant='standard'
          />

          <TextField
            id='standard-helperText'
            label='Helper Text'
            defaultValue="Default value"
            helperText='Some important text'
            variant='standard'
          />
        </div>

      </Box>
    </div>
  );
}