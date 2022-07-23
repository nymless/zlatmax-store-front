import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const Counter: FC<CounterProps> = (props) => {
  const handleMinusClick = () => {
    if (props.value === 1) {
      return;
    }
    if (props.value < 1) {
      props.setValue(1);
    }
    props.setValue(props.value - 1);
  };

  const handlePlusClick = () => {
    props.setValue(props.value + 1);
  };

  return (
    <div className={styles.Counter}>
      <div role={'button'} className={styles.minus} onClick={handleMinusClick}>
        -
      </div>
      <div className={styles.value}>{props.value}</div>
      <div role={'button'} className={styles.plus} onClick={handlePlusClick}>
        +
      </div>
    </div>
  );
};

export default Counter;
