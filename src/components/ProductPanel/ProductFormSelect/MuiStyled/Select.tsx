import { styled } from '@mui/material/styles';
import MuiSelect from '@mui/material/Select';

export const Select = styled(MuiSelect)({
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#141414',
  },
});
