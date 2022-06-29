import React, { FC } from 'react';
import styles from './ProductFilter.module.css';
import Typography from '@mui/material/Typography';
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
import { Accordion } from './Styled/Accordion';
import { AccordionSummary } from './Styled/AccordionSummary';
import { AccordionDetails } from './Styled/AccordionDetails';
import { ProductSelectors } from '../../hooks/useProductSelectors';

interface ProductFilterProps {
  selectors: ProductSelectors;
}

const ProductFilter: FC<ProductFilterProps> = (props) => {
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
    <div className={styles.ProductFilter}>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Цена</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SliderForm
            min={2000}
            step={1000}
            max={200000}
            from={2000}
            to={200000}
          />
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
          <SliderForm
            min={2000}
            step={1000}
            max={200000}
            from={2000}
            to={200000}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel8a-content" id="panel8a-header">
          <Typography>Длина клинка, мм</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SliderForm
            min={2000}
            step={1000}
            max={200000}
            from={2000}
            to={200000}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel9a-content" id="panel9a-header">
          <Typography>Ширина клинка, мм</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SliderForm
            min={2000}
            step={1000}
            max={200000}
            from={2000}
            to={200000}
          />
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
