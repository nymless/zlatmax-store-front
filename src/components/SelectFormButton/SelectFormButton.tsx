import React, { FC } from 'react';
import './SelectFormButton.module.css';
import arrow from './arrow.svg';
import styles from './SelectFormButton.module.css';
import classNames from 'classnames';

export interface muiSelectIconProps {
  className: string;
}

interface SelectFormButtonProps {
  muiProps: muiSelectIconProps;
}

const SelectFormButton: FC<SelectFormButtonProps> = (props) => (
  <div
    className={classNames(props.muiProps.className, styles.SelectFormButton)}
  >
    <img src={arrow} alt="OpenSelect" />
  </div>
);

export default SelectFormButton;
