import MuiTextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles/';

export const TextField = styled(MuiTextField)({
  '& label.Mui-focused': {
    color: '#E8AA31',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255,255,255,52%)',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255,255,255,5%)',
    color: '#FFFFFF',
    '& fieldset': {
      borderColor: '#FFFFFF',
    },
    '&:hover fieldset': {
      borderColor: '#E8AA31',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#E8AA31',
    },
  },
});
