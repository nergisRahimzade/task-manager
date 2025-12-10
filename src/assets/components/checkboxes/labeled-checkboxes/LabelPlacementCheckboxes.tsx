import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../../General.css';

export function LabelPlacementCheckboxes() {
  return (
    <div className='container'>
      <p className='header'>LABEL PLACEMENT</p>

      <FormControl component="fieldset">
        <FormLabel component="legend">Label Placement</FormLabel>
        <FormGroup aria-label='position' row>
          <FormControlLabel
            value='bottom'
            control={<Checkbox />}
            label='Bottom' 
            labelPlacement='bottom'
          />

          <FormControlLabel
            value='end'
            control={<Checkbox />}
            label='End' 
            labelPlacement='end'
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}