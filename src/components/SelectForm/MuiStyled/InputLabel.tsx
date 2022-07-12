import { styled } from '@mui/material/styles';
import MuiInputLabel from '@mui/material/InputLabel';

export const InputLabel = styled(MuiInputLabel)({
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  opacity: 0.8,
  fontSize: '0.875rem',
  '&.Mui-focused': {
    color: '#141414',
    opacity: 1,
  }
});
