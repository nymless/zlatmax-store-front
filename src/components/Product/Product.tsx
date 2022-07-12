import React, { FC } from 'react';
import { ProductModelForPage } from '../../redux/services/types';
import styles from './Product.module.css';
import RatingStars from '../RatingStars/RatingStars';
import Compare from '../Compare/Compare';
import Favorites from '../Favorites/Favorites';
import { Form, Formik } from 'formik';
import {
  useGetBladeMaterialsQuery,
  useGetHandguardMaterialsQuery,
  useGetHandleMaterialsQuery,
  useGetProductsByModelIdQueryQuery,
} from '../../redux/services/productsApi';
import SelectForm from '../SelectForm/SelectForm';

interface ProductProps {
  productModel: ProductModelForPage;
}

// todo: userId app context.
// todo: product stock server API. Color representation of stock status.
// todo: products compare server API.
// todo: product rating server API.
// todo: user bonuses server API.
// todo: product code server API.
// todo: product series server API.
// todo: blade maintenance server API.

const Product: FC<ProductProps> = (props) => {
  const initialValues = {
    blade: '',
    handle: '',
    handguard: '',
    maintenance: '',
  };

  const handleSubmit = (values: any, actions: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  const products = useGetProductsByModelIdQueryQuery(
    props.productModel.id
  ).data;
  const bladeMaterials = useGetBladeMaterialsQuery().data;
  const handleMaterials = useGetHandleMaterialsQuery().data;
  const handguardMaterials = useGetHandguardMaterialsQuery().data;

  return (
    <div className={styles.Product}>
      <header className={styles.header}>
        <h2 className={styles.heading}>{props.productModel.name}</h2>
        <div className={styles.stars}>
          <RatingStars rating={5} />
        </div>
        <div className={styles.misc}>
          <Compare />
          <Favorites userId={1} modelId={props.productModel.id} />
        </div>
      </header>
      <div className={styles.stock}>В наличии</div>
      <div className={styles.info}>
        <span>Артикул:</span>
        <span className={styles.description}>AF0000001952</span>
        <span>Торговая марка:</span>
        <span className={styles.description}>WUESTHOF (Германия)</span>
        <span>Серия:</span>
        <span className={styles.description}>Ножи серии Classic Ikon</span>
        <span>Бонусные баллы:</span>
        <span className={styles.description}>38</span>
      </div>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {(props) => (
            <Form className={styles.materials}>
              <span className={styles.formLabel}>Сталь</span>
              <SelectForm
                name="blade"
                label="Выбрать сталь"
                selectList={bladeMaterials}
                values={props.values.blade}
                handleChange={props.handleChange}
              />
              <span className={styles.formLabel}>Рукоять</span>
              <SelectForm
                name="handle"
                label="Выбрать рукоять"
                selectList={handleMaterials}
                values={props.values.handle}
                handleChange={props.handleChange}
              />
              <span className={styles.formLabel}>Гарда и тыльник</span>
              <SelectForm
                name="handguard"
                label="Выбрать гарду и тыльник"
                selectList={handguardMaterials}
                values={props.values.handguard}
                handleChange={props.handleChange}
              />
              <span className={styles.formLabel}>Обработка клинка</span>
              <SelectForm
                name="maintenance"
                label="Выбрать обработку клинка"
                selectList={bladeMaterials}
                values={props.values.maintenance}
                handleChange={props.handleChange}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Product;
