import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import '../../General.css';

export function AutoWidthSelects() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className='container'>
      <p className='header'>AUTO WIDTH SELECTS</p>

      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label" >Age</InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={age}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty One</MenuItem>
          <MenuItem value={22}>Twenty Two</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}