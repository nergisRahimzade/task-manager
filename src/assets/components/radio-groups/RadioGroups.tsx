import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../General.css';

export function RadioGroups() {
  return (
    <div className='container'>
      <p className='header'>RADIO GROUPS</p>
      
      <FormControl>
        <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel value="female" control={<Radio />} label='Female' />
          <FormControlLabel value="male" control={<Radio />} label='Male' />
          <FormControlLabel value="other" control={<Radio />} label='Other' />
        </RadioGroup>
      </FormControl>
    </div>
  );
}