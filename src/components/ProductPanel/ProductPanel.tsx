import React, { FC, useState } from 'react';
import { ProductModelForProductPage } from '../../redux/services/types';
import styles from './ProductPanel.module.css';
import RatingStars from '../RatingStars/RatingStars';
import Compare from '../Compare/Compare';
import Favorites from '../Favorites/Favorites';
import { useFormik } from 'formik';
import Counter from './Counter/Counter';
import ProductForm from './ProductForm/ProductForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import cart from '../../assets/svg/cart.svg';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

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

  const formik = useFormik({
    initialValues: {
      bladeId: props.product.defaultBladeId,
      handleId: props.product.defaultHandleId,
      handguardId: props.product.defaultHandguardId,
      maintenanceId: '',
    },
    onSubmit: (values, actions) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    },
  });

  // todo: cart server api
  const addToCart = (event: any) => {
    console.log('Product added to cart');
  };

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
      <form className={styles.ProductForm} onSubmit={formik.handleSubmit}>
        <ProductForm
          values={formik.values}
          handleChange={formik.handleChange}
          setPrice={setPrice}
          product={props.product}
        />
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
                  {'Вам будут начислены баллы в размере ' +
                    bonusRate * 100 +
                    '% от стоимости покупки. ' +
                    'Их можно будет использовать на оплату ' +
                    'последующих заказов.'}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.quantityBlock}>
            <div className={styles.quantity}>
              <Counter value={quantity} setValue={setQuantity} />
            </div>
            <div className={styles.buttonBlock}>
              <Button onClick={addToCart} submitForm={true} scaleOnHover={true}>
                В корзину
                <img className={styles.buttonSvg} src={cart} alt="cart" />
              </Button>
              <Link className={styles.link} to={'../buy'}>
                <Button
                  onClick={addToCart}
                  submitForm={true}
                  darkBackground={true}
                  scaleOnHover={true}
                >
                  Купить в 1 клик
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </form>
    </div>
  );
};

export default ProductPanel;
