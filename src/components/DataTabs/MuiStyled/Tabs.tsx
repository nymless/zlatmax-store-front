import MuiTabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles/';

export const Tabs = styled(MuiTabs)(() => ({
  '& .MuiTabs-flexContainer': {
    gap: '62px',
  },

  '& .MuiTabs-indicator': {
    backgroundColor: '#E8AA31',
  },
}));
