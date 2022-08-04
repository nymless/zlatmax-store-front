import React, { FC } from 'react';
import styles from './ProductFilterForm.module.css';
import Typography from '@mui/material/Typography';
import { Accordion } from './MuiStyled/Accordion';
import { AccordionSummary } from './MuiStyled/AccordionSummary';
import { AccordionDetails } from './MuiStyled/AccordionDetails';
import { Form, Formik } from 'formik';
import { RangesForFormSliders } from '../../redux/services/types';
import { useFilterFormLists } from '../../hooks/useFilterFormLists';
import { useFilterFormInit } from '../../hooks/useFilterFormInit';
import SliderForm from './SliderForm/SliderForm';
import RadioForm from './RadioForm/RadioForm';

interface ProductFilterFormProps {
  ranges?: RangesForFormSliders;
}

const ProductFilterForm: FC<ProductFilterFormProps> = (props) => {
  const {
    categories,
    brand,
    bladeMaterials,
    handleMaterials,
    handguardMaterials,
    gildingTypes,
    rating,
  } = useFilterFormLists();

  const {
    isCategorySelected,
    isBrandSelected,
    isMaterialSelected,
    initialFormValues,
    handleSubmitForm,
  } = useFilterFormInit();

  return (
    <div className={styles.ProductFilterForm}>
      <h3 className={styles.heading}>Фильтр товаров</h3>
      <Formik initialValues={initialFormValues} onSubmit={handleSubmitForm}>
        {({ values, setFieldValue }) => (
          <Form>
            <button type="submit">Submit</button>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                sx={{ backgroundColor: '#FEFEFE' }}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: '#141414' }}>Цена</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SliderForm
                  min={props.ranges?.price.min || 1000}
                  step={1}
                  max={props.ranges?.price.max || 10000}
                  values={values}
                  setFieldValue={setFieldValue}
                  field="price"
                />
              </AccordionDetails>
            </Accordion>
            {!isCategorySelected && (
              <Accordion defaultExpanded={true}>
                <AccordionSummary
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Категории</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioForm
                    list={categories}
                    values={values}
                    setFieldValue={setFieldValue}
                    field="categoryId"
                  />
                </AccordionDetails>
              </Accordion>
            )}
            {!isBrandSelected && (
              <Accordion defaultExpanded={true}>
                <AccordionSummary
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Производство</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioForm
                    list={brand}
                    values={values}
                    setFieldValue={setFieldValue}
                    field="brandId"
                  />
                </AccordionDetails>
              </Accordion>
            )}
            {!isMaterialSelected && (
              <Accordion defaultExpanded={true}>
                <AccordionSummary
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Сталь</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioForm
                    list={bladeMaterials}
                    values={values}
                    setFieldValue={setFieldValue}
                    field="bladeMaterialId"
                  />
                </AccordionDetails>
              </Accordion>
            )}
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography>Рукоять</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RadioForm
                  list={handleMaterials}
                  values={values}
                  setFieldValue={setFieldValue}
                  field="handleMaterialId"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <Typography>Гарда и тыльник</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RadioForm
                  list={handguardMaterials}
                  values={values}
                  setFieldValue={setFieldValue}
                  field="handguardMaterialId"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                aria-controls="panel6a-content"
                id="panel6a-header"
              >
                <Typography>Золочение</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RadioForm
                  list={gildingTypes}
                  values={values}
                  setFieldValue={setFieldValue}
                  field="gildingTypeId"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                aria-controls="panel7a-content"
                id="panel7a-header"
              >
                <Typography>Общая длина, мм</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SliderForm
                  min={props.ranges?.totalLength.min || 100}
                  step={1}
                  max={props.ranges?.totalLength.max || 300}
                  values={values}
                  setFieldValue={setFieldValue}
                  field="totalLength"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                aria-controls="panel8a-content"
                id="panel8a-header"
              >
                <Typography>Длина клинка, мм</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SliderForm
                  min={props.ranges?.bladeLength.min || 100}
                  step={1}
                  max={props.ranges?.bladeLength.max || 300}
                  values={values}
                  setFieldValue={setFieldValue}
                  field="bladeLength"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                aria-controls="panel9a-content"
                id="panel9a-header"
              >
                <Typography>Ширина клинка, мм</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SliderForm
                  min={props.ranges?.bladeWidth.min || 10}
                  step={1}
                  max={props.ranges?.bladeWidth.max || 100}
                  values={values}
                  setFieldValue={setFieldValue}
                  field="bladeWidth"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                aria-controls="panel10a-content"
                id="panel10a-header"
              >
                <Typography>Рейтинг</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RadioForm
                  list={rating}
                  values={values}
                  setFieldValue={setFieldValue}
                  field="rating"
                />
              </AccordionDetails>
            </Accordion>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductFilterForm;
