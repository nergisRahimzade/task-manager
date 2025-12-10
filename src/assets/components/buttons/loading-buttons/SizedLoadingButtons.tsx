import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import '../../General.css';

export function SizedLoadingButtons() {
  return (
    <div className='container'>
      <p className='header'>SIZED LOADING BUTTONS</p>

      <Stack spacing={2}>
        <Stack direction='row' spacing={2}>
          <Button loading variant='contained'>
            Submit
          </Button>

          <Button
            loading
            loadingIndicator='Loading...'
            variant='outlined'
          >
            Fetch Data
          </Button>

          <Button
            loading
            loadingPosition='end'
            startIcon={<SaveIcon />}
            variant='contained'
          >
            Save
          </Button>
        </Stack>

        <Stack spacing={2}>
          <Button
            fullWidth
            loading
            loadingPosition='end'
            startIcon={<SaveIcon />}
            variant='outlined'
          >
            Full width
          </Button>

          <Button
            fullWidth
            loading
            loadingPosition='start'
            endIcon={<SaveIcon />}
            variant='contained'
          >
            Full width
          </Button>

        </Stack>

        <Stack direction='row' spacing={2}>
          <Button loading loadingPosition='start' variant='contained'>
            Submit
          </Button>

          <Button
            loading
            loadingPosition='end'
            variant='outlined'
          >
            Submit
          </Button>

          <Button
            loading
            loadingPosition='end'
            startIcon={<SaveIcon />}
            variant='contained'
          >
            Save
          </Button>
        </Stack>
      </Stack>


    </div>
  );
}
