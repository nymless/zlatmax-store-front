import React, { FC, useState } from 'react';
import {
  ProductModelForProductPage,
  ProductWithParts,
} from '../../redux/services/types';
import styles from './ProductPanel.module.css';
import RatingStars from '../RatingStars/RatingStars';
import Compare from '../Compare/Compare';
import Favorites from '../Favorites/Favorites';
import { Formik } from 'formik';
import { useProductFormInit } from '../../hooks/useProductFormInit';
import Counter from './Counter/Counter';
import ProductForm from './ProductForm/ProductForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface ProductProps {
  productModel: ProductModelForProductPage;
  product: ProductWithParts;
}

// todo: userId app context.
// todo: product stock server API. Color representation of stock status.
// todo: products compare server API.
// todo: product rating server API.
// todo: user bonuses server API.
// todo: product code server API.
// todo: product series server API.
// todo: blade maintenance server API.

const ProductPanel: FC<ProductProps> = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { initialValues, handleSubmit } = useProductFormInit();

  const appBrands = useSelector((state: RootState) => state.app.appBrands);

  // todo: from server API
  const bonusRate = 0.01;
  const productBonuses = Math.floor(props.product.price * bonusRate);
  const purchaseBonuses = productBonuses * quantity;

  const totalPrice = props.product.price * quantity;
  const totalPriceLocalized = totalPrice.toLocaleString('ru', {
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'RUB',
  });

  return (
    <div className={styles.ProductPanel}>
      <header className={styles.header}>
        <h2 className={styles.heading}>{props.productModel.name}</h2>
        <div className={styles.stars}>
          <RatingStars rating={5} />
        </div>
        <div className={styles.misc}>
          <Compare />
          <Favorites userId={1} productId={props.product.id} />
        </div>
      </header>
      <div className={styles.stock}>В наличии</div>
      <div className={styles.info}>
        <span>Артикул:</span>
        <span className={styles.description}>{props.product.code}</span>
        <span>Торговая марка:</span>
        <span className={styles.description}>
          {appBrands[props.productModel.brandId]}
        </span>
        {props.productModel.seriesName && (
          <>
            <span>Серия:</span>
            <span className={styles.description}>
              {props.productModel.seriesName}
            </span>
          </>
        )}
        <span>Бонусные баллы:</span>
        <span className={styles.description}>{productBonuses}</span>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
          <ProductForm
            product={props.product}
            productModelId={props.productModel.id}
            values={values}
            handleChange={handleChange}
          />
        )}
      </Formik>
      <footer className={styles.footer}>
        <div className={styles.priceBlock}>
          <div className={styles.price}>{totalPriceLocalized}</div>
          <div className={styles.bonusBlock}>
            <div className={styles.bonus}>
              {`+ ${purchaseBonuses} баллов за покупку`}
            </div>
            <div className={styles.bonusInfo}>?</div>
          </div>
        </div>
        <div className={styles.quantityBlock}>
          <div className={styles.quantity}>
            <Counter value={quantity} setValue={setQuantity} />
          </div>
          <div className={styles.buttonBlock}>
            <div className={styles.cart}></div>
            <div className={styles.buy}></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPanel;
