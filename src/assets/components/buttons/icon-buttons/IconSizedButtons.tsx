import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import '../../General.css';

export function IconSizedButtons() {
  return (
    <div className='container'>
      <p className='header'>ICON SIZED BUTTONS</p>

      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <IconButton aria-label="delete" size='small'>
          <DeleteIcon fontSize='inherit' />
        </IconButton>

        <IconButton aria-label='delete' size='small'>
          <DeleteIcon fontSize='small' />
        </IconButton>

        <IconButton aria-label='delete' size='large'>
          <DeleteIcon />
        </IconButton>

        <IconButton aria-label='delete' size='large'>
          <DeleteIcon fontSize='inherit'/>
        </IconButton>
      </Stack>
    </div>
  );
}