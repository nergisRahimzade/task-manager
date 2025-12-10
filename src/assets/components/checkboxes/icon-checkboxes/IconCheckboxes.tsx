import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import '../../General.css';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' }}};

export function IconCheckboxes() {
  return (
    <div className='container'>
      <p className='header'>ICON CHECKBOXES</p>

      <Checkbox 
        {...label} 
        icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} 
      />

      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />} 
      />
    </div>
  );
}