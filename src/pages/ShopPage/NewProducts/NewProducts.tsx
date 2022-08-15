import React, { FC } from 'react';
import styles from './NewProducts.module.scss';
import { withContainer } from '../../../hoc/withContainer';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/svg/Arrow.svg';
import { useGetUserQuery } from '../../../redux/services/userApi';
import { useGetTopSellersQuery } from '../../../redux/services/productsApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { ProductCard } from '../../../components/ProductCard/ProductCard';
import Button from '../../../components/Button/Button';
import cart from '../../../assets/svg/cart.svg';

interface NewProductsProps {}

const NewProducts: FC<NewProductsProps> = () => {
  const user = useGetUserQuery().data;
  const { data } = useGetTopSellersQuery();

  if (!data?.length) {
    return null;
  }

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  return (
    <div className={styles.NewProducts}>
      <div>
        <h2>Новинки</h2>
        <p>
          Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
          представлен наиболее широкий выбор Златоустовских ножей от
          Златоустовских Оружейных Фабрик и компаний, мы являемся официальными
          поставщиками.
        </p>
        <Link className={styles.link} to={'/new-products'}>
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
          '--swiper-pagination-bullet-inactive-color': '#000000',
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
  );
};

export default withContainer(NewProducts);
