import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../General.css';

export function ColoredButtons() {
  return (
    <div className="container">
      <p className="header">COLORED BUTTONS</p>

      <Stack direction="row" spacing={2}>
        <Button color='secondary'>
          Secondary
        </Button>
        <Button variant="contained" color='success'>
          Succes
        </Button>
        <Button variant="outlined" color='error'>
          Error
        </Button>
      </Stack>
    </div>
  );
}