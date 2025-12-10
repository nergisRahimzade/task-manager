import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import '../../General.css';

export function TransitionedLoadingButtons() {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <div className='container'>
      <p className='header'>TRANSITION LOADING BUTTONS</p>

      <div>
        <FormControlLabel
          sx={{ display: 'block' }}
          control={
            <Switch
              checked={loading}
              onChange={() => setLoading(!loading)}
              name='loading'
              color='success'
            />
          }
          label='Loading'
        />

        <Box sx={{ '& > button' : { m: 1 }}}>
          <Button
            size='small'
            onClick={handleClick}
            loading={loading}
            variant='outlined'
            disabled
          >
            Disabled
          </Button>

          <Button
            size='small'
            onClick={handleClick}
            loading={loading}
            loadingIndicator="Loading..."
            variant='contained'
          >
            Fetch Data
          </Button>

          <Button
            size='small'
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition='end'
            variant='outlined'
          >
            Send
          </Button>

          <Button
            size='small'
            onClick={handleClick}
            color='secondary'
            loading={loading}
            loadingPosition='start'
            startIcon={<SaveIcon />}
            variant='contained'
          >
            Save
          </Button>

        </Box>

        <Box sx={{ '& > button': { m: 1 }}}>
          <Button
            onClick={handleClick}
            loading={loading}
            variant='outlined'
            disabled
          >
            Disabled
          </Button>

          <Button
            onClick={handleClick}
            loading={loading}
            loadingIndicator='Loading'
            variant='contained'
          >
            Fetch Data
          </Button>

          <Button
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition='end'
            variant='outlined'
          >
            Send
          </Button>

          <Button
            color='secondary'
            onClick={handleClick}
            loading={loading}
            loadingPosition='start'
            startIcon={<SaveIcon />}
            variant='contained'
          >
            Save
          </Button>

        </Box>
        
      </div>

    </div>
  );
}