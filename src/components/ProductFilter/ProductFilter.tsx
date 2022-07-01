import React, { FC } from 'react';
import styles from './ProductFilter.module.css';
import Typography from '@mui/material/Typography';
import RadioForm from '../RadioForm/RadioForm';
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
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RatingStars from '../RatingStars/RatingStars';

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
          <SliderForm min={1000} step={100} max={10000} from={2000} to={9000} />
        </AccordionDetails>
      </Accordion>
      {isCategory && (
        <Accordion defaultExpanded={true}>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Производство</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioForm list={categories} />
          </AccordionDetails>
        </Accordion>
      )}
      {isBrand && (
        <Accordion defaultExpanded={true}>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Производство</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioForm list={brand} />
          </AccordionDetails>
        </Accordion>
      )}
      {isMaterial && (
        <Accordion defaultExpanded={true}>
          <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
            <Typography>Сталь</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioForm list={bladeMaterials} />
          </AccordionDetails>
        </Accordion>
      )}
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel4a-content" id="panel4a-header">
          <Typography>Рукоять</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioForm list={handleMaterials} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel5a-content" id="panel5a-header">
          <Typography>Гарда и тыльник</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioForm list={handguardMaterials} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel6a-content" id="panel6a-header">
          <Typography>Золочение</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioForm list={gilding} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel7a-content" id="panel7a-header">
          <Typography>Общая длина, мм</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SliderForm min={100} step={10} max={300} from={100} to={300} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel8a-content" id="panel8a-header">
          <Typography>Длина клинка, мм</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SliderForm min={100} step={10} max={300} from={100} to={300} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel9a-content" id="panel9a-header">
          <Typography>Ширина клинка, мм</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SliderForm min={100} step={10} max={300} from={100} to={300} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary aria-controls="panel10a-content" id="panel10a-header">
          <Typography>Рейтинг</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="5/5"
                label="5/5"
                control={
                  <Radio
                    icon={<div className="outer"></div>}
                    checkedIcon={
                      <div className="outer">
                        <div className="inner"></div>
                      </div>
                    }
                  />
                }
              />
              <RatingStars rating={5}/>
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProductFilter;
