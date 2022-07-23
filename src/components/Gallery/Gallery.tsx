import React, { FC, useState } from 'react';
import { ProductModelForProductPage } from '../../redux/services/types';
import { AppPaths } from '../../paths/AppPaths';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import styles from './Gallery.module.css';
import SwiperClass, { FreeMode, Navigation, Thumbs } from 'swiper';

interface GalleryProps {
  product: ProductModelForProductPage;
}

const Gallery: FC<GalleryProps> = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={styles.Gallery}>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#E8AA31',
            '--swiper-pagination-color': '#E8AA31',
          } as Record<string, string>
        }
        spaceBetween={16}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.imageSwiper}
      >
        {props.product.gallery.map((item) => {
          return (
            <SwiperSlide key={item.id} className={styles.imageSlide}>
              <img
                className={styles.image}
                src={AppPaths.STATIC_URL + item.img}
                alt={'Изображение ' + props.product.name}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={16}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.itemsSwiper}
      >
        {props.product.gallery.map((item) => {
          return (
            <SwiperSlide key={item.id} className={styles.itemSlide}>
              <img
                className={styles.item}
                src={AppPaths.STATIC_URL + item.img}
                alt={'Изображение ' + props.product.name}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Gallery;
