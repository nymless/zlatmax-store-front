import React, { FC } from 'react';
import { styled } from '@mui/material/styles/';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AccordionProps } from '@mui/material/Accordion/Accordion';
import MuiAccordion from '@mui/material/Accordion';
import { AccordionSummaryProps } from '@mui/material/AccordionSummary/AccordionSummary';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBoxForm from '../CheckBoxForm/CheckBoxForm';
import {
  useGetBladeMaterialsQuery,
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetGildingQuery,
  useGetHandguardMaterialsQuery,
  useGetHandleMaterialsQuery,
} from '../../redux/services/productsApi';
import SliderForm from '../SliderForm/SliderForm';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(({ theme }) => ({
  color: 'white',
  backgroundColor: 'rgb(14, 14, 14)',
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#E8AA31',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  '& .MuiTypography-root': {
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgb(0, 0, 0)',
}));

interface ProductFilterProps {}

const ProductFilter: FC<ProductFilterProps> = () => {
  const categories = useGetCategoriesQuery().data;
  const brand = useGetBrandsQuery().data;
  const bladeMaterials = useGetBladeMaterialsQuery().data;
  const handleMaterials = useGetHandleMaterialsQuery().data;
  const handguardMaterials = useGetHandguardMaterialsQuery().data;
  const gilding = useGetGildingQuery().data;

  const isCategory = false;
  const isBrand = true;
  const isMaterial = true;

  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Цена</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SliderForm range={[20, 50]} />
        </AccordionDetails>
      </Accordion>
      {isCategory && (
        <Accordion defaultExpanded={true}>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Производство</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CheckBoxForm list={categories} />
          </AccordionDetails>
        </Accordion>
      )}
      {isBrand && (
        <Accordion defaultExpanded={true}>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Производство</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CheckBoxForm list={brand} />
          </AccordionDetails>
        </Accordion>
      )}
      {isMaterial && (
        <Accordion defaultExpanded={true}>
          <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
            <Typography>Сталь</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CheckBoxForm list={bladeMaterials} />
          </AccordionDetails>
        </Accordion>
      )}
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel4a-content" id="panel4a-header">
          <Typography>Рукоять</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckBoxForm list={handleMaterials} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel5a-content" id="panel5a-header">
          <Typography>Гарда и тыльник</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckBoxForm list={handguardMaterials} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel6a-content" id="panel6a-header">
          <Typography>Золочение</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckBoxForm list={gilding} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel7a-content" id="panel7a-header">
          <Typography>Общая длина, мм</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SliderForm range={[20, 50]} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel8a-content" id="panel8a-header">
          <Typography>Длина клинка, мм</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SliderForm range={[20, 50]} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel9a-content" id="panel9a-header">
          <Typography>Ширина клинка, мм</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SliderForm range={[20, 50]} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel10a-content" id="panel10a-header">
          <Typography>Рейтинг</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProductFilter;
