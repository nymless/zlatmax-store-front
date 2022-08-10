import React, { FC } from 'react';
import styles from './BottomBanner.module.css';
import { withContainer } from '../../../hoc/withContainer';

interface BottomBannerProps {}

const BottomBanner: FC<BottomBannerProps> = () => (
  <div className={styles.BottomBanner}>BottomBanner Component</div>
);

export default withContainer(BottomBanner);
