import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import '../General.css';

export function Buttons() {
  return (
    <div className="container">
      <p className="header">BUTTONS</p>

      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

    </div>
  );
}
