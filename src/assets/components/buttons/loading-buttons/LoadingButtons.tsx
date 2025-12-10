import { useState, useEffect } from 'react';
import  Tooltip  from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function LoadingButtons() {
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className='container'>
      <p className='header'>LOADING BUTTONS</p>
      
      <Tooltip title='Click to see loading'>
        <IconButton onClick={() => {setLoading(true)}} loading={loading}>
          <ShoppingCartIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}