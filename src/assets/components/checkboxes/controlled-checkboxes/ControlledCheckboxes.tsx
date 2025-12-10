import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import '../../General.css';

export function ControlledCheckboxes() {
  const [ checked, setChecked ] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setChecked(event.target.checked);
  };

  return (
    <div className='container'>
      <p className='header'>CONTROLLED CHECKBOXES</p>

      <Checkbox
        checked={checked}
        onChange={handleChange}
        slotProps={{
          input: { 'aria-label': 'controlled'}
        }}
      />
    </div>
  );
}