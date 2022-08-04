import MuiFormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles/';

export const FormControlLabel = styled(MuiFormControlLabel)(() => ({
  alignItems: 'flex-start',
  '& .MuiTypography-root': {
    paddingTop: '7px',
  },
}));
