import React, { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const Counter: FC<CounterProps> = (props) => {
  const handleMinusClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (props.value === 1) {
      return;
    }
    if (props.value < 1) {
      props.setValue(1);
    }
    props.setValue(props.value - 1);
  };

  const handlePlusClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    props.setValue(props.value + 1);
  };

  return (
    <div className={styles.Counter}>
      <button className={styles.minus} onClick={handleMinusClick}>
        -
      </button>
      <div className={styles.value}>{props.value}</div>
      <button className={styles.plus} onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
};

export default Counter;
