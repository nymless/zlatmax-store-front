import React, { FC, PropsWithChildren } from 'react';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { AppPaths } from '../../variables/AppPaths';
import { ProductForProductCard } from '../../redux/models/types';
import RatingStars from '../RatingStars/RatingStars';
import Favorites from '../Favorites/Favorites';
import Compare from '../Compare/Compare';
import classNames from 'classnames';
import { AppRouts } from '../../variables/AppRouts';

type ProductCardProps = {
  product: ProductForProductCard;
  userId?: number;
  scaleOnHover?: boolean;
  shadowOnHover?: boolean;
};

export const ProductCard: FC<PropsWithChildren<ProductCardProps>> = (props) => {
  // todo: reviews server API
  // todo: rating server API
  const discount = props.product.discountRate;
  const defaultPrice = props.product.defaultPrice;
  const priceWithDiscount = defaultPrice * (1 - discount / 100);

  const localizedDefaultPrice = defaultPrice.toLocaleString('ru', {
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'RUB',
  });

  const localizedPriceWithDiscount = priceWithDiscount.toLocaleString('ru', {
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'RUB',
  });

  return (
    <article
      className={classNames(styles.card, {
        [styles.cardScale]: props.scaleOnHover,
        [styles.boxShadow]: props.shadowOnHover,
      })}
    >
      <Link
        className={styles.link}
        to={AppRouts.PRODUCT + '/' + props.product.id}
      >
        {discount && <div className={styles.discount}>{`-${discount}%`}</div>}
        <img
          className={styles.image}
          src={AppPaths.IMG_URL + props.product.img}
          alt={'Изображение ' + props.product.name}
        />
        <h3 className={styles.heading}>{props.product.name}</h3>
        <div className={styles.info}>
          <div className={styles.blade}>{props.product.bladeMaterialName}</div>
          <div className={styles.handle}>
            {props.product.handleMaterialName +
              ', ' +
              props.product.handguardMaterialName}
          </div>
        </div>
        <div className={styles.other}>
          <div className={styles.rating}>
            <RatingStars rating={props.product.rating} />
          </div>
          <div className={styles.reviews}>12 отзывов</div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.priceBlock}>
            <div className={styles.priceBox}>
              <div className={styles.price}>{localizedPriceWithDiscount}</div>
              {discount && (
                <div className={styles.oldPrice}>{localizedDefaultPrice}</div>
              )}
            </div>
            <div className={styles.misc}>
              <Compare />
              {props.userId && (
                <Favorites userId={props.userId} productId={props.product.id} />
              )}
            </div>
          </div>
          {props.children && (
            <div className={styles.footerOptional}>{props.children}</div>
          )}
        </footer>
      </Link>
    </article>
  );
};
