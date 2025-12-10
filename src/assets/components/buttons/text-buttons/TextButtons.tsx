import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import '../../General.css'

export function TextButtons() {
  return (
    <div className="container">
      <p className="header">TEXT BUTTONS</p>

      <Stack direction="row" spacing={2}>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </Stack>
    </div>
  );
}