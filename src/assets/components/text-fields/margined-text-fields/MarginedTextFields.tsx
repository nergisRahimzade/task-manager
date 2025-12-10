import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../General.css';

function RedBar() {
  return (
    <Box
      sx={(theme) => ({
        height: 20,
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        ...theme.applyStyles('dark', {
          backgroundColor: 'rgb(255 132 132 / 25%)',
        }),
      })}
    />
  );
}

export function MarginedTextFields() {
  return (
    <div className='container'>
      <p className='header'>MARGINED TEXT FIELDS</p>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTextField-root': { width: '25ch' },
        }}
      >
        <RedBar />
        <TextField label={'margin="none"'} id='margin-none' />

        <RedBar />
        <TextField label={'margin="dense"'} id='margin-dense' margin='dense' />

        <RedBar />
        <TextField label={'margin="normal"'} id='margin-normal' margin='normal' />
      </Box>
    </div>
  );
}