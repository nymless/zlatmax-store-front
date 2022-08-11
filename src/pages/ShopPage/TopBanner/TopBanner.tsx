import React, { FC } from 'react';
import styles from './TopBanner.module.scss';
import { withContainer } from '../../../hoc/withContainer';
import bannerImage from './img/banner-image.png';
import image1 from './img/image-1.svg';
import image2 from './img/image-2.svg';
import image3 from './img/image-3.svg';
import image4 from './img/image-4.svg';
import BannerSwiper from './BannerSwiper/BannerSwiper';
import PlusDot from './PlusDot/PlusDot';

interface TopBannerProps {}

const TopBanner: FC<TopBannerProps> = () => (
  <div className={styles.TopBanner}>
    <div className={styles.upperBlock}>
      <div>
        <BannerSwiper />
      </div>
      <div>
        <div className={styles.bannerImageWrapper}>
          <div className={styles.background}></div>
          <div className={styles.decoration__one}>
            <PlusDot />
          </div>
          <div className={styles.decoration__two}>
            <PlusDot />
          </div>
          <div className={styles.decoration__three}>
            <PlusDot />
          </div>
          <img
            className={styles.bannerImage}
            src={bannerImage}
            alt="Кухонные ножи"
          />
        </div>
      </div>
    </div>
    <div className={styles.bottomBlock}>
      <div className={styles.bottomItem}>
        <img src={image1} alt="Гарантия" />
        <p>{'Гарантия 100% возврата\nденежных средств.'}</p>
      </div>
      <div className={styles.bottomItem}>
        <img src={image2} alt="Доставка" />
        <p>{'Доставка по России,\nКазахстану и Белоруссии.'}</p>
      </div>
      <div className={styles.bottomItem}>
        <img src={image3} alt="Оформление" />
        <p>{'Возможность оформление\nзаказа без регистрации.'}</p>
      </div>
      <div className={styles.bottomItem}>
        <img src={image4} alt="Скидки" />
        <p>{'Скидки постоянным\nпокупателям.'}</p>
      </div>
    </div>
  </div>
);

export default withContainer(TopBanner);
