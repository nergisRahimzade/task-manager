import Checkbox from '@mui/material/Checkbox';
import '../General.css';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' }}};

export function Checkboxes() {
  return (
    <div className='container'>
      <p className='header'>CHECKBOXES</p>

      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
}