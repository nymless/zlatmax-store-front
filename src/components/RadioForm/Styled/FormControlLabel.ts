import { styled } from '@mui/material/styles';
import MuiFormControlLabel from '@mui/material/FormControlLabel';

export const FormControlLabel = styled(MuiFormControlLabel)({
  '&.MuiFormControlLabel-root': {
    gap: 5,
  },
  '& .MuiFormControlLabel-label': {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
  }
});
