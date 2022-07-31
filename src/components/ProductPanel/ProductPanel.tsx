import React, { FC, useState } from 'react';
import { ProductModelForProductPage } from '../../redux/services/types';
import styles from './ProductPanel.module.css';
import RatingStars from '../RatingStars/RatingStars';
import Compare from '../Compare/Compare';
import Favorites from '../Favorites/Favorites';
import { Form, Formik } from 'formik';
import { useProductFormInit } from '../../hooks/useProductFormInit';
import Counter from './Counter/Counter';
import ProductForm from './ProductForm/ProductForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import cart from './cart.svg';

interface ProductProps {
  product: ProductModelForProductPage;
}

// todo: userId app context.
// todo: product stock server API. Color representation of stock status.
// todo: products compare server API.
// todo: product rating server API.
// todo: user bonuses server API.

const ProductPanel: FC<ProductProps> = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { initialValues, handleSubmit } = useProductFormInit(props.product);
  const appBrands = useSelector((state: RootState) => state.app.appBrands);
  const [price, setPrice] = useState(props.product.defaultPrice);

  // todo: from server API
  const bonusRate = 0.05;
  const productBonuses = Math.floor(price * bonusRate);
  const purchaseBonuses = productBonuses * quantity;

  const totalPrice = price * quantity;
  const totalPriceLocalized = totalPrice.toLocaleString('ru', {
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'RUB',
  });

  return (
    <div className={styles.ProductPanel}>
      <header className={styles.header}>
        <h2 className={styles.heading}>{props.product.name}</h2>
        <div className={styles.stars}>
          <RatingStars rating={props.product.rating} />
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
          {appBrands[props.product.brandId]}
        </span>
        {props.product.seriesId && (
          <>
            <span>Серия:</span>
            <span className={styles.description}>{props.product.seriesId}</span>
          </>
        )}
        <span>Бонусные баллы:</span>
        <span className={styles.description}>{productBonuses}</span>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
          <Form className={styles.ProductForm}>
            <ProductForm
              values={values}
              setPrice={setPrice}
              product={props.product}
              handleChange={handleChange}
            />
          </Form>
        )}
      </Formik>
      <footer className={styles.footer}>
        <div className={styles.priceBlock}>
          <div className={styles.price}>{totalPriceLocalized}</div>
          <div className={styles.bonusBlock}>
            <div className={styles.bonus}>
              {`+ ${purchaseBonuses} баллов за покупку`}
            </div>
            <div className={styles.bonusInfo}>
              ?
              <div className={styles.bonusDescription}>
                {`Вам будут начислены баллы в размере ${
                  bonusRate * 100
                }% от стоимости покупки. Их
                  можно будет использовать на оплату последующих заказов.`}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quantityBlock}>
          <div className={styles.quantity}>
            <Counter value={quantity} setValue={setQuantity} />
          </div>
          <div className={styles.buttonBlock}>
            <button className={styles.cart}>
              В корзину
              <img src={cart} alt="cart" />
            </button>
            <button className={styles.buy}>Купить в 1 клик</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPanel;
