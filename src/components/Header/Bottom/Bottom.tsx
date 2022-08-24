import React, { FC } from 'react';
import { AppContainer } from '../../../shared/AppContainer/AppContainer';
import { Dropdown } from '../../Dropdown/Dropdown';
import styles from './Bottom.module.css';

interface BottomProps {}

const Bottom: FC<BottomProps> = (props) => (
  <AppContainer>
    <div className={styles.Bottom}>
      <Dropdown />
    </div>
  </AppContainer>
);

export default Bottom;
