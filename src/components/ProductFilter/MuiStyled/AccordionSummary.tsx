import { AccordionSummaryProps } from '@mui/material/AccordionSummary/AccordionSummary';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles/';

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(() => ({
  color: 'white',
  padding: '0 30px',
  backgroundColor: 'rgb(14, 14, 14)',
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#E8AA31',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiTypography-root': {
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
}));
