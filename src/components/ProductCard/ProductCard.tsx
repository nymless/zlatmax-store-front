import React, { FC } from 'react';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { AppPaths } from '../../paths/AppPaths';
import { ProductModelForCard } from '../../redux/services/types';
import RatingStars from '../RatingStars/RatingStars';
import Favorites from '../Favorites/Favorites';
import Compare from '../Compare/Compare';

type Props = {
  model: ProductModelForCard;
  userId?: number;
};

export const ProductCard: FC<Props> = (props) => {
  // todo: reviews server API
  // todo: discounts server API
  // todo: rating server API

  const discount = 50;

  const localizedPrice = props.model.price.toLocaleString('ru', {
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'RUB',
  });

  return (
    <Link className={styles.card} to={'/product/' + props.model.id}>
      {discount && <div className={styles.discount}>{`-${discount}%`}</div>}
      <img
        className={styles.image}
        src={AppPaths.STATIC_URL + props.model.img}
        alt={'Изображение ' + props.model.name}
      />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 className={styles.name}>{props.model.name}</h3>
        </div>
        <div className={styles.info}>
          <div className={styles.blade}>{props.model.bladeMaterial}</div>
          <div className={styles.handle}>
            {`${props.model.handleMaterial}, ${props.model.handguardMaterial}`}
          </div>
        </div>
        <div className={styles.other}>
          <div className={styles.rating}>
            <RatingStars rating={5} />
          </div>
          <div className={styles.reviews}>12 отзывов</div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.price}>{localizedPrice}</div>
        <div className={styles.misc}>
          <Compare />
          {props.userId && (
            <Favorites userId={props.userId} modelId={props.model.id} />
          )}
        </div>
      </footer>
    </Link>
  );
};
