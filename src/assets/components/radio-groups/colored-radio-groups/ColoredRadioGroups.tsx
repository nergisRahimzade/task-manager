import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import '../../General.css';

export function ColoredRadioGroups() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: {'aria-label': item}
  });

  return (
    <div className='container'>
      <p className='header'>COLORED RADIO GROUPS</p>

      <Radio {...controlProps('a')}/>
      <Radio {...controlProps('b')} color='secondary'/>
      <Radio {...controlProps('c')} color='success'/>
      <Radio {...controlProps('d')} color='default'/>
      <Radio {...controlProps('e')} sx={{ 
        color: pink[800],
        '&.Mui-checked': {
          color: pink[600]
        }
      }} />

    </div>
  );
}