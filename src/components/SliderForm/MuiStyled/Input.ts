import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';

export const Input = styled(MuiInput)({
  '& .MuiInput-input': {
    borderRadius: 3,
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    height: 42,
    padding: 0,
    border: '1px solid #CBCBCB',
    textAlign: 'center',
  },
  '&:before': {
    display: 'none',
  },
  '&:after': {
    borderBottomColor: '#E8AA31',
  },
});
