import React, { FC } from 'react';
import styles from './TopBanner.module.css';
import { withContainer } from '../../../hoc/withContainer';
import bannerImage from './img/banner-image.png';
import image1 from './img/image-1.svg';
import image2 from './img/image-2.svg';
import image3 from './img/image-3.svg';
import image4 from './img/image-4.svg';

interface TopBannerProps {}

const TopBanner: FC<TopBannerProps> = () => (
  <div className={styles.TopBanner}>
    <div className={styles.upperBlock}>
      <div className={styles.upperItem}>
        <h2>
          <span>{'Интернет магазин сертифицированных\n'}</span>
          <span>златоустовских ножей</span>
        </h2>
        <p>
          <span>
            {
              'Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине\n'
            }
          </span>
          <span>
            {
              'представлен наиболее широкий выбор Златоустовских ножей от Златоустовских\n'
            }
          </span>
          <span>
            Златоустовских Оружейных Фабрик и компаний, мы являемся официальными
            поставщиками.
          </span>
        </p>
      </div>
      <div className={styles.upperItem}>
        <img src={bannerImage} alt="Кухонные ножи" />
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
