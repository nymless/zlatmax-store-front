import React, { FC } from 'react';
import styles from './Products.module.css';
import { AppContainer } from '../../../shared/AppContainer/AppContainer';
import { CatalogCard } from './CatalogCard/CatalogCard';
import knife from './img/knife.png';
import dagger from './img/dagger.png';
import sword from './img/sword.png';
import souvenir from './img/souvenir.png';
import related from './img/related.png';
import workshop from './img/workshop.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
  const some = useSelector((state: RootState) => state.appState.appCategories);

  const knifeCatalog = [
    { id: 1, name: 'Разделочные' },
    { id: 2, name: 'Туристические' },
    { id: 3, name: 'Охотничьи' },
  ];

  const daggerCatalog = [
    { id: 1, name: 'Разделочные' },
    { id: 2, name: 'Туристические' },
    { id: 3, name: 'Охотничьи' },
  ];

  const swordCatalog = [
    { id: 1, name: 'Разделочные' },
    { id: 2, name: 'Туристические' },
    { id: 3, name: 'Охотничьи' },
  ];

  const souvenirCatalog = [
    { id: 1, name: 'Разделочные' },
    { id: 2, name: 'Туристические' },
    { id: 3, name: 'Охотничьи' },
  ];

  const relatedCatalog = [
    { id: 1, name: 'Разделочные' },
    { id: 2, name: 'Туристические' },
    { id: 3, name: 'Охотничьи' },
  ];

  const workshopCatalog = [
    { id: 1, name: 'Разделочные' },
    { id: 2, name: 'Туристические' },
    { id: 3, name: 'Охотничьи' },
  ];

  return (
    <AppContainer>
      <div className={styles.Products}>
        <CatalogCard
          route={'/category'}
          name={'Каталог ножей'}
          list={knifeCatalog}
        >
          <img className={styles.img} src={knife} alt="Нож" />
        </CatalogCard>
        <CatalogCard
          route={'/dagger'}
          name={'Среднеклинковое оружие'}
          list={daggerCatalog}
        >
          <img
            className={styles.img}
            src={dagger}
            alt="Среднеклинковое оружие"
          />
        </CatalogCard>
        <CatalogCard
          route={'/sword'}
          name={'Длинноклинковое оружие'}
          list={swordCatalog}
        >
          <img
            className={styles.img}
            src={sword}
            alt="Длинноклинковое оружие"
          />
        </CatalogCard>
        <CatalogCard
          route={'/souvenir'}
          name={'Сувенирные изделия'}
          list={souvenirCatalog}
        >
          <img className={styles.img} src={souvenir} alt="Сувенирные изделия" />
        </CatalogCard>
        <CatalogCard
          route={'/related'}
          name={'Сопутствующие товары'}
          list={relatedCatalog}
        >
          <img
            className={styles.img}
            src={related}
            alt="Сопутствующие товары"
          />
        </CatalogCard>
        <CatalogCard
          route={'/workshop'}
          name={'Ножевая мастерская'}
          list={workshopCatalog}
        >
          <img className={styles.img} src={workshop} alt="Ножевая мастерская" />
        </CatalogCard>
      </div>
    </AppContainer>
  );
};

export default Products;
