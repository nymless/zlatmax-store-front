import React, { FC } from 'react';
import styles from './BottomBanner.module.css';
import { AppContainer } from '../../../shared/AppContainer/AppContainer';

interface BottomBannerProps {}

const BottomBanner: FC<BottomBannerProps> = () => (
  <AppContainer>
    <div className={styles.BottomBanner}>
      <h2 className={styles.heading}>
        Златоустовские ножи интернет-магазин "ЗЛАТМАКС"
      </h2>
      <p className={styles.text}>
        Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого
        качества из города оружейников - Златоуста. Златоустовские ножи известны
        и популярны среди потребителей как на российским рынке, так и за
        рубежом: ножи охотничьи, хозяйственные, туристические, рыбацкие,
        складные и метательные. Нож Златоуста - это идеальный друг и товарищ в
        повседневной жизни и в экстремальных ситуациях. На многую продукцию
        распространяется гарантия до 10 лет - это один из главных показателей
        качества. Для Вас на нашем сайте "zlatmax" предложен огромный
        ассортимент Златоустовских ножей. Наши менеджеры помогут определиться и
        подобрать самый лучший Златоустовский нож, ориентируясь на Ваши
        пожелания.
      </p>
    </div>
  </AppContainer>
);

export default BottomBanner;
