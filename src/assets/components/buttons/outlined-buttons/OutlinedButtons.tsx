import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../General.css';

export function OutlinedButtons() {
  return (
    <div className="container">
      <p className="header">OUTLINED BUTTONS</p>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined">
          Primary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </Stack>
    </div>
  );
}