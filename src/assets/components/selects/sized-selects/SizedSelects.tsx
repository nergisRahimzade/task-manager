import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import '../../General.css';

export function SizedSelects() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className='container'>
      <p className='header'>SIZED SELECTS</p>

      <FormControl sx={{ m: 1, minWidth: 80 }} size='small'>
        <InputLabel id="demo-simple-select-small-label" >Age</InputLabel>
        <Select
          labelId='demo-select-small-label'
          id='demo-select-small'
          value={age}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}