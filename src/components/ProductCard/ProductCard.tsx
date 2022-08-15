import React, { FC, PropsWithChildren } from 'react';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { AppPaths } from '../../variables/AppPaths';
import { ProductWithMaterials } from '../../redux/services/types';
import RatingStars from '../RatingStars/RatingStars';
import Favorites from '../Favorites/Favorites';
import Compare from '../Compare/Compare';
import classNames from 'classnames';

type ProductCardProps = {
  product: ProductWithMaterials;
  userId?: number;
  scaleOnHover?: boolean;
  shadowOnHover?: boolean;
};

export const ProductCard: FC<PropsWithChildren<ProductCardProps>> = (props) => {
  // todo: reviews server API
  // todo: discounts server API
  // todo: rating server API

  const discount = 50;

  const localizedPrice = props.product.defaultPrice.toLocaleString('ru', {
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
      <Link className={styles.link} to={'/product/' + props.product.id}>
        {discount && <div className={styles.discount}>{`-${discount}%`}</div>}
        <img
          className={styles.image}
          src={AppPaths.STATIC_URL + props.product.img}
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
            <div className={styles.price}>{localizedPrice}</div>
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
