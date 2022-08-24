import React, { FC } from 'react';
import styles from './NewProducts.module.scss';
import { AppContainer } from '../../../shared/AppContainer/AppContainer';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/svg/Arrow.svg';
import { useGetNewProductsQuery } from '../../../redux/api/productsApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { ProductCard } from '../../../shared/ProductCard/ProductCard';
import Button from '../../../shared/Button/Button';
import cart from '../../../assets/svg/cart.svg';
import { AppRouts } from '../../../variables/AppRouts';
import { useAppSelector } from '../../../redux/store';

interface NewProductsProps {}

const NewProducts: FC<NewProductsProps> = () => {
  const user = useAppSelector((state) => state.userState.user);
  const { data } = useGetNewProductsQuery();

  if (!data?.length) {
    return null;
  }

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  return (
    <AppContainer>
      <div className={styles.NewProducts}>
        <div>
          <h2 className={styles.heading}>Новинки</h2>
          <p className={styles.text}>
            Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
            представлен наиболее широкий выбор Златоустовских ножей от
            Златоустовских Оружейных Фабрик и компаний, мы являемся официальными
            поставщиками.
          </p>
          <Link className={styles.link} to={AppRouts.NEW_PRODUCTS}>
            {'Перейти в каталог'} <img src={arrow} alt="Стрелка перехода" />
          </Link>
        </div>
        <Swiper
          className={styles.newProductsSwiper}
          modules={[Autoplay, Pagination]}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={30}
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
          {data.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} userId={user?.id}>
                <Button onClick={handleOnClick} value={product.id}>
                  В корзину
                  <img className={styles.buttonSvg} src={cart} alt="Корзина" />
                </Button>
              </ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </AppContainer>
  );
};

export default NewProducts;
