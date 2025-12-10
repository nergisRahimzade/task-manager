import * as React from 'react';
import Radio from '@mui/material/Radio';
import '../../General.css';

export function StandaloneRadioGroups() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className='container'>
      <p className='header'>STANDALONE RADIO GROUPS</p>

      <Radio
        checked={selectedValue === 'a'} 
        onChange={handleChange}
        value='a'
        name='radio-buttons'
        inputProps={{ 'aria-label': 'A'}}
      />

      <Radio
        checked={selectedValue === 'b'} 
        onChange={handleChange}
        value='b'
        name='radio-buttons'
        inputProps={{ 'aria-label': 'B'}}
      />
    </div>
  );
}