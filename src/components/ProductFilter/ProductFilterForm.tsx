import React, { FC } from 'react';
import styles from './ProductFilterForm.module.css';
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
import RatingStars from '../RatingStars/RatingStars';
import { Form, Formik, FormikValues } from 'formik';
import { filterTruthy } from '../../utils/filterTruthy';
import { useSearchParams } from 'react-router-dom';
import { Ranges } from '../../redux/types';

interface ProductFilterFormProps {
  selectors: ProductSelectors;
  ranges: Ranges | undefined;
}

const ProductFilterForm: FC<ProductFilterFormProps> = (props) => {
  const [, setSearchParams] = useSearchParams();

  const categories = useGetCategoriesQuery().data;
  const brand = useGetBrandsQuery().data;
  const bladeMaterials = useGetBladeMaterialsQuery().data;
  const handleMaterials = useGetHandleMaterialsQuery().data;
  const handguardMaterials = useGetHandguardMaterialsQuery().data;
  const gilding = useGetGildingQuery().data;

  const isCategorySelected = Boolean(props.selectors.categoryId);
  const isBrandSelected = Boolean(props.selectors.brandId);
  const isMaterialSelected = Boolean(props.selectors.bladeMaterialId);

  const initialValues = {
    typeId: props.selectors.typeId || '',
    price: '',
    categoryId: props.selectors.categoryId || '',
    brandId: props.selectors.brandId || '',
    bladeMaterialId: props.selectors.bladeMaterialId || '',
    handleMaterialId: '',
    handguardMaterialId: '',
    gildingId: '',
    totalLength: '',
    bladeLength: '',
    bladeWidth: '',
    rating: '',
  };

  const handleSubmit = (values: FormikValues) => {
    const getParams = filterTruthy(values);
    setSearchParams(getParams);
  };

  const rating = (rating: number, text: string) => {
    return (
      <div className={styles.rating}>
        <div>
          <RatingStars rating={rating} />
        </div>
        <div>{text}</div>
      </div>
    );
  };

  const ratingList = [
    { id: 5, name: rating(5, '5/5') },
    { id: 4, name: rating(4, '4/5') },
    { id: 3, name: rating(3, '3/5') },
    { id: 2, name: rating(2, '2/5') },
    { id: 1, name: rating(1, '1/5') },
  ];

  // todo: fix issue with category form shown, when categories page selecting

  return (
    <div className={styles.ProductFilterForm}>
      <h3 className={styles.heading}>Фильтр товаров</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
                  step={100}
                  max={props.ranges?.price.max || 50000}
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
                  list={gilding}
                  values={values}
                  setFieldValue={setFieldValue}
                  field="gildingId"
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
                  list={ratingList}
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
