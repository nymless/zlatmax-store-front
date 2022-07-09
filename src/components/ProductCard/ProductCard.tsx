import React, { FC } from 'react';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { AppPaths } from '../../paths/AppPaths';
import { ModelCard } from '../../redux/types';
import RatingStars from '../RatingStars/RatingStars';
import compare from './compare.svg';
import notFavorites from './favorites.svg';
import favorites from './favorites-filled.svg';
import {
  useAddFavoriteMutation,
  useGetFavoritesQuery,
  useRemoveFavoriteMutation,
} from '../../redux/services/userApi';

type Props = {
  model: ModelCard;
  userId?: number;
};

export const ProductCard: FC<Props> = (props) => {
  // todo: discount state and server API
  const discount = 50;

  const favoritesList = useGetFavoritesQuery(props.userId as number)?.data;
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();

  const inFavorites = Boolean(
    favoritesList?.some((favorite) => {
      return favorite.modelId === props.model.id;
    })
  );

  const handleFavoriteClick = (event: any) => {
    event.preventDefault();
    if (!props.userId) {
      return;
    }
    if (inFavorites) {
      removeFavorite({ userId: props.userId, modelId: props.model.id });
    } else {
      addFavorite({ userId: props.userId, modelId: props.model.id });
    }
  };

  return (
    <Link className={styles.card} to={'/product/' + props.model.id}>
      {discount && (
        <div className={styles.discount}>{'-' + discount + '%'}</div>
      )}
      <img
        className={styles.image}
        src={AppPaths.STATIC_URL + props.model.img}
        alt={'Изображение ' + props.model.name}
      />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 className={styles.name}>{props.model.name}</h3>
        </div>
        <div className={styles.info}>
          <div className={styles.blade}>95x18</div>
          <div className={styles.handle}>Орех, Алюминий</div>
        </div>
        <div className={styles.other}>
          <div className={styles.rating}>
            <RatingStars rating={5} />
          </div>
          <div className={styles.reviews}>12 отзывов</div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.price}>2 719 р.</div>
        <div className={styles.misc}>
          <div className={styles.compare}>
            <img src={compare} alt="Compare icon" />
          </div>
          <div className={styles.favorite} onClick={handleFavoriteClick}>
            {inFavorites ? (
              <img src={favorites} alt="In favorites icon" />
            ) : (
              <div className={styles.notFavorite}>
                <img
                  className={styles.passive}
                  src={notFavorites}
                  alt="Not in favorites icon"
                />
                <img
                  className={styles.active}
                  src={favorites}
                  alt="To favorites icon"
                />
              </div>
            )}
          </div>
        </div>
      </footer>
    </Link>
  );
};
