import * as React from 'react';
import Radio from '@mui/material/Radio';
import '../../General.css';

export function SizedRadioGroups() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: {'aria-label': item}
  });

  return (
    <div className='container'>
      <p className='header'>SIZED RADIO GROUPS</p>

      <Radio {...controlProps('a')} size='small' />
      <Radio {...controlProps('b')} />
      <Radio {...controlProps('c')} size='small' sx={{ '& .MuiSvgIcon-root': {
        fontSize: 28
      }}} />

    </div>
  );
}