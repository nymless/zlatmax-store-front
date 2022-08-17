import React, { FC } from 'react';
import styles from './Reviews.module.css';
import { useGetReviewsByParamsQuery } from '../../../redux/services/reviewsApi';
import NoReviews from './NoReviews/NoReviews';
import { AppPaths } from '../../../variables/AppPaths';
import RatingStars from '../../../shared/RatingStars/RatingStars';
import like from './like.svg';
import Pagination from '@mui/material/Pagination';
import { useSearchParams } from 'react-router-dom';
import { useAppPagination } from '../../../hooks/useAppPagination';

interface ReviewsProps {
  productId: number;
}

const Reviews: FC<ReviewsProps> = (props) => {
  const [searchParams] = useSearchParams();

  const reviewsLimit = 2;
  searchParams.set('limit', reviewsLimit.toString());
  searchParams.set('productId', props.productId.toString());

  const { data, error, isLoading } = useGetReviewsByParamsQuery(
    Object.fromEntries(searchParams.entries())
  );

  const { currentPage, handlePagination, pagesCount } = useAppPagination(
    searchParams,
    reviewsLimit,
    data?.count
  );

  if (isLoading) {
    return <div className={styles.Reviews}>Загрузка отзывов</div>;
  }

  if (error) {
    return <div className={styles.Reviews}>Ошибка загрузки</div>;
  }

  if (!data?.count) {
    return (
      <div className={styles.Reviews}>
        <NoReviews />
      </div>
    );
  }

  const dateFormatter = new Intl.DateTimeFormat('ru');

  // todo: reviews reply server API
  const addReply = () => {
    console.log('add reply');
  };

  // todo: reviews like server API
  const addLike = () => {
    console.log('add like');
  };

  return (
    <div className={styles.Reviews}>
      <div className={styles.reviewsInner}>
        {data.rows.map((review) => {
          const date = new Date(review.date);

          return (
            <div key={review.id} className={styles.review}>
              <img
                className={styles.avatar}
                src={AppPaths.STATIC_URL + review.img}
                alt="Avatar"
              />
              <div className={styles.content}>
                <header className={styles.header}>
                  <h4 className={styles.name}>{review.name}</h4>
                  <div className={styles.date}>
                    {dateFormatter.format(date)}
                  </div>
                </header>
                <RatingStars rating={review.rate} />
                <p className={styles.text}>{review.review}</p>
                <footer className={styles.footer}>
                  <button className={styles.reply} onClick={addReply}>
                    Ответить
                  </button>
                  <button className={styles.like} onClick={addLike}>
                    <img src={like} alt="Like" />
                  </button>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.paginator}>
        {pagesCount && (
          <Pagination
            onChange={handlePagination}
            page={currentPage}
            count={pagesCount}
          />
        )}
      </div>
    </div>
  );
};

export default Reviews;
