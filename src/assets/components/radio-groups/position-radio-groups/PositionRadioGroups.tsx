import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../../General.css';

export function PositionRadioGroups() {
  return (
    <div className='container'>
      <p className='header'>LABEL PLACEMENT</p>

      <FormControl>
        <FormLabel id="demo-form-control-label-placement">
          Label placement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="end"
        >
          <FormControlLabel
            value="bottom"
            control={<Radio />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel value="end" control={<Radio />} label="End" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}