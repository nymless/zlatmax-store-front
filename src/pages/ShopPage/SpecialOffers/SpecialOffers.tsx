import React, { FC } from 'react';
import styles from './SpecialOffers.module.scss';
import { withContainer } from '../../../hoc/withContainer';
import { useGetUserQuery } from '../../../redux/services/userApi';
import { useGetSpecialOffersQuery } from '../../../redux/services/productsApi';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/svg/Arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { ProductCard } from '../../../shared/ProductCard/ProductCard';
import Button from '../../../shared/Button/Button';
import cart from '../../../assets/svg/cart.svg';

interface SpecialOffersProps {}

const SpecialOffers: FC<SpecialOffersProps> = React.memo(() => {
  const user = useGetUserQuery().data;
  const { data } = useGetSpecialOffersQuery();

  if (!data?.length) {
    return null;
  }

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  return (
    <div className={styles.SpecialOffers}>
      <header className={styles.header}>
        <h2>Акции</h2>
        <Link className={styles.link} to={'/special-offers'}>
          {'Все акции'} <img src={arrow} alt="Стрелка перехода" />
        </Link>
      </header>
      <Swiper
        className={styles.specialOffersSwiper}
        modules={[Autoplay, Pagination]}
        slidesPerView={4}
        slidesPerGroup={4}
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
            <ProductCard
              product={product}
              userId={user?.id}
              shadowOnHover={true}
            >
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
});

export default withContainer(SpecialOffers);
