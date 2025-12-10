import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import '../../General.css';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' }}};

export function ColoredCheckboxes() {
  return (
    <div className='container'>
      <p className='header'>COLORED CHECKBOXES</p>

       <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
  );
}