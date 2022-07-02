import { AccordionProps } from '@mui/material/Accordion/Accordion';
import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles/';

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '&:before': {
    display: 'none',
  },
}));
