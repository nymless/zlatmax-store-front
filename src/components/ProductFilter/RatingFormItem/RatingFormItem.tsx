import React, { FC } from 'react';
import styles from '../ProductFilterForm.module.css';
import RatingStars from '../../RatingStars/RatingStars';

interface RaringFormItemProps {
  rating: number;
  text: string;
}

const RatingFormItem: FC<RaringFormItemProps> = (props) => {
  return (
    <div className={styles.rating}>
      <div>
        <RatingStars rating={props.rating} />
      </div>
      <div>{props.text}</div>
    </div>
  );
};

export default RatingFormItem;
