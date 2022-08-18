import React from 'react';
import styles from './ShopPage.module.css';
import TopBanner from './TopBanner/TopBanner';
import Products from './Products/Products';
import TopSellers from './TopSellers/TopSellers';
import NewProducts from './NewProducts/NewProducts';
import SpecialOffers from './SpecialOffers/SpecialOffers';
import Articles from './Articles/Articles';
import BottomBanner from './BottomBanner/BottomBanner';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const ShopPage = () => {
  useScrollToTop();

  return (
    <div className={styles.ShopPage}>
      <div className={styles.topBanner}>
        <TopBanner />
      </div>
      <div className={styles.products}>
        <Products />
      </div>
      <div className={styles.topSellers}>
        <TopSellers />
      </div>
      <div className={styles.newProducts}>
        <NewProducts />
      </div>
      <div className={styles.sales}>
        <SpecialOffers />
      </div>
      <div className={styles.articles}>
        <Articles />
      </div>
      <div className={styles.bottomBanner}>
        <BottomBanner />
      </div>
    </div>
  );
};

export default ShopPage;
