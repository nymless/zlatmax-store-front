import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles/';

export const Button = styled(MuiButton)({
  backgroundColor: '#E8AA31',
  borderRadius: '0 3px 3px 0',
  height: '56px',
  width: '56px',
  minWidth: 'unset',
  position: 'absolute',
  right: 0,

  '&:hover': {
    backgroundColor: '#E8AA31',
    border: '1px solid white',
    borderLeft: 'none',
  },
});
