import { styled } from '@mui/material/styles';
import MuiCheckbox from '@mui/material/Checkbox';

export const Checkbox = styled(MuiCheckbox)({
  borderBottomColor: '#E8AA31',
  paddingLeft: 12,
  '& .outer': {
    height: 18,
    width: 18,
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '&.Mui-checked': {
    '& .outer': {
      height: 18,
      width: 18,
      border: '1px solid #E8AA31',
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& .inner': {
      height: 12,
      width: 12,
      borderRadius: 1,
      backgroundColor: '#E8AA31',
    },
  },
  '& .MuiFormControlLabel-label': {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
  }
});
