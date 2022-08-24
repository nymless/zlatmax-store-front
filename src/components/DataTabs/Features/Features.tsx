import React, { FC } from 'react';
import styles from './Features.module.css';
import { ProductForProductPage } from '../../../redux/models/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

interface FeaturesProps {
  product: ProductForProductPage;
}

const Features: FC<FeaturesProps> = (props) => {
  const appBrands = useSelector((state: RootState) => state.appState.appBrands);

  return (
    <div className={styles.Features}>
      <div className={styles.panel}>
        <h3 className={styles.heading}>Технические характеристики</h3>
        <div className={styles.content}>
          <span>Общая длина, мм:</span>
          <span>{props.product.totalLength}</span>
          <span>Длина клинка, мм:</span>
          <span>{props.product.bladeLength}</span>
          <span>Ширина клинка, мм:</span>
          <span>{props.product.bladeWidth}</span>
          <span>Толщина обуха, мм:</span>
          <span>{props.product.bladeThickness}</span>
        </div>
      </div>
      <div className={styles.panel}>
        <h3 className={styles.heading}>Используемые материалы</h3>
        <div className={styles.content}>
          <span>Сталь:</span>
          <span>{props.product.bladeMaterialName}</span>
          <span>Рукоять</span>
          <span>{props.product.handleMaterialName}</span>
        </div>
      </div>
      <div className={styles.panel}>
        <h3 className={styles.heading}>Производство</h3>
        <div className={styles.content}>
          <span>Производство</span>
          <span>{appBrands[props.product.brandId]}</span>
        </div>
      </div>
    </div>
  );
};

export default Features;
