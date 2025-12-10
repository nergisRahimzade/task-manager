import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import '../General.css';

export function BasicAlerts() {
  return (
    <div className='container'>
      <p className='header'>BASIC ALERTS</p>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity='success'>This is a success Alert.</Alert>
        <Alert severity='info'>This is a info Alert.</Alert>
        <Alert severity='warning'>This is a warning Alert.</Alert>
        <Alert severity='error'>This is a error Alert.</Alert>
      </Stack>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant='filled' severity='success'>This is a success Alert - filled.</Alert>
        <Alert variant='filled' severity='info'>This is a info Alert - filled.</Alert>
        <Alert variant='filled' severity='warning'>This is a warning Alert - filled.</Alert>
        <Alert variant='filled' severity='error'>This is a error Alert - filled.</Alert>
      </Stack>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant='outlined' severity='success'>This is a success Alert - outlined.</Alert>
        <Alert variant='outlined' severity='info'>This is a info Alert - outlined.</Alert>
        <Alert variant='outlined' severity='warning'>This is a warning Alert - outlined.</Alert>
        <Alert variant='outlined' severity='error'>This is a error Alert - outlined.</Alert>
      </Stack>

    </div>
  );
}