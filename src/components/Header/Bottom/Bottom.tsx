import React, { FC } from 'react';
import { withContainer } from '../../../hoc/withContainer';
import { Dropdown } from '../../Dropdown/Dropdown';
import styles from './Bottom.module.css';

interface BottomProps {}

const Bottom: FC<BottomProps> = (props) => (
  <div className={styles.Bottom}>
    <Dropdown />
  </div>
);

export default withContainer(Bottom);
