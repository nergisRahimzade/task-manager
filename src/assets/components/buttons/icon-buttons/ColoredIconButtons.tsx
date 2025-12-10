import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Stack from '@mui/material/Stack';
import '../../General.css';

export function ColoredIconButtons() {
  return (
    <div className='container'>
      <p className='header'>COLORED ICON BUTTONS</p>

      <Stack direction="row" spacing={2}>
        <IconButton aria-label="fingerprint" color='success'>
          <Fingerprint />
        </IconButton>

        <IconButton aria-label='fingerprint' color='secondary'>
          <Fingerprint />
        </IconButton>
      </Stack>
    </div>
  );
}