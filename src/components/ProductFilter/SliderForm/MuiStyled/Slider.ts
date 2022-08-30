import { styled } from '@mui/material/styles';
import MuiSlider from '@mui/material/Slider';

export const Slider = styled(MuiSlider)({
  color: '#141414',
  height: 2,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 18,
    width: 18,
    backgroundColor: '#141414',
    border: '3px solid #E8AA31',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-rail': {
    color: '#E8AA31',
    opacity: 1,
  },
});
