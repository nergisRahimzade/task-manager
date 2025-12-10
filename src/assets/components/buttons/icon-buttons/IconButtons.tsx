import IconButton from '@mui/material/IconButton';
import DeleteIcon  from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';
import '../../General.css';

export function IconButtons() {
  return (
    <div className='container'>
      <p className='header'>ICON BUTTONS</p>

      <Stack direction="row" spacing={2}>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>

        <IconButton aria-label='delete' disabled color='primary'>
          <DeleteIcon />
        </IconButton>

        <IconButton aria-label='add an alarm' color='secondary'>
          <AlarmIcon />
        </IconButton>

        <IconButton aria-label='add to shopping cart' color='primary'>
          <AddShoppingCartIcon />
        </IconButton>
      </Stack>
    </div>
  );
}
