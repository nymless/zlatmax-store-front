import React, { FC } from 'react';
import styles from './NoReviews.module.css';

interface NoReviewsProps {}

const NoReviews: FC<NoReviewsProps> = () => {
  // TODO: add review server API
  const addReview = () => {
    console.log('add review');
  };

  return (
    <div className={styles.NoReviews}>
      <p className={styles.text}>
        У данного товара нет отзывов. Станьте первым, кто оставил отзыв об этом
        товаре!
      </p>
      <button className={styles.addReview} onClick={addReview}>
        Написать отзыв
      </button>
    </div>
  );
};

export default NoReviews;
