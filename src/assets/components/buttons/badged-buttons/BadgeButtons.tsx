import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../General.css';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export function BadgeButtons() {
  return (
    <div className="container">
      <p className='header'>BADGE BUTTONS</p>

      <IconButton>
        <ShoppingCartIcon fontSize="small" />
        <CartBadge badgeContent={2} color='secondary' overlap='circular' />
      </IconButton>
    </div>
  );
}