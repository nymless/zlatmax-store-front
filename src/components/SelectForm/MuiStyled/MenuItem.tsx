import { styled } from '@mui/material/styles';
import MuiMenuItem from '@mui/material/MenuItem';

export const MenuItem = styled(MuiMenuItem)({
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,

  '&.Mui-selected:first-of-type': {
    color: '#141414',
    backgroundColor: '#FEFEFE',
  },
  '&.Mui-selected': {
    color: '#FFFFFF',
    backgroundColor: '#141414',
  },
  '&:hover': {
    color: '#FFFFFF',
    backgroundColor: '#141414',
  },
  '&.Mui-selected:hover': {
    color: '#FFFFFF',
    backgroundColor: '#141414',
  },
});
