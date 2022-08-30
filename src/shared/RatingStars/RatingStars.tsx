import React, { FC } from 'react';
import styles from './RatingStars.module.css';
import star from './Star.svg';

interface RatingStarsProps {
  rating: number;
}

const RatingStars: FC<RatingStarsProps> = (props) => {
  const starsList = [];

  for (let i = 1; i <= props.rating; i++) {
    starsList.push(i);
  }

  return (
    <div className={styles.RatingStars}>
      {starsList.map((i) => {
        return <img key={i} className={styles.starImg} src={star} alt="rating" />;
      })}
    </div>
  );
};

export default RatingStars;
