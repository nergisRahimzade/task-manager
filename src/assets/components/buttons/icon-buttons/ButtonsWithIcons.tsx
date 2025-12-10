import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import '../../General.css';

export function ButtonsWithIcons() {
  return (
    <div className='container'>
      <p className="header">BUTTONS WITH ICONS</p>

      <Stack direction="row" spacing={2}>
        <Button variant='contained' endIcon={<DeleteIcon />}>
          Delete
        </Button>

        <Button variant='outlined' startIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  );
}