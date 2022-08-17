import React, { FC } from 'react';
import styles from './BannerSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import Button from '../../../../shared/Button/Button';

interface BannerSwiperProps {}

const BannerSwiper: FC<BannerSwiperProps> = () => {
  return (
    <Swiper
      className={styles.BannerSwiper}
      modules={[Autoplay, Pagination]}
      speed={500}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 10000,
        disableOnInteraction: true,
      }}
      style={{
        '--swiper-pagination-color': '#E8AA31',
        '--swiper-pagination-bullet-inactive-color': '#fff',
        '--swiper-pagination-bullet-inactive-opacity': '0.5',
      }}
    >
      <SwiperSlide>
        <div className={styles.BannerSlide}>
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
              Оружейных Фабрик и компаний, мы являемся официальными
              поставщиками.
            </span>
          </p>
          <Link className={styles.details} to={'./details'}>
            <Button>Подробнее</Button>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.BannerSlide}>
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
              Оружейных Фабрик и компаний, мы являемся официальными
              поставщиками.
            </span>
          </p>
          <Link className={styles.details} to={'./details'}>
            <Button>Подробнее</Button>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.BannerSlide}>
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
              Оружейных Фабрик и компаний, мы являемся официальными
              поставщиками.
            </span>
          </p>
          <Link className={styles.details} to={'./details'}>
            <Button>Подробнее</Button>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.BannerSlide}>
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
              Оружейных Фабрик и компаний, мы являемся официальными
              поставщиками.
            </span>
          </p>
          <Link className={styles.details} to={'./details'}>
            <Button>Подробнее</Button>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSwiper;
