import MuiTab from '@mui/material/Tab';
import { styled } from '@mui/material/styles/';

export const Tab = styled(MuiTab)(() => ({
  '&.MuiTab-root': {
    fontFamily: 'Montserrat, sans-serif',
    color: '#141414',
    opacity: '50%',
    fontSize: '1.25rem',
    fontWeight: 600,
    textTransform: 'none',
    paddingLeft: 0,
    paddingRight: 0,

    '&.Mui-selected': {
      opacity: '100%',
      fontWeight: 700,
    },
  },
}));
