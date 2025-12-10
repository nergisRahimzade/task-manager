import Checkbox from '@mui/material/Checkbox';
import '../../General.css';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' }}};

export function SizedCheckboxes() {
  return (
    <div className='container'>
      <p className='header'>SIZED CHECKBOXES</p>

      <Checkbox {...label} defaultChecked size="small" />
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
    </div>
  );
}