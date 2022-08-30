import React, { FC } from 'react';
import styles from './Favorites.module.css';
import inFavoritesImg from './favorites-filled.svg';
import notFavoritesImg from './favorites.svg';
import {
  useAddProductToFavoriteMutation,
  useGetFavoritesByUserIdQuery,
  useRemoveProductFromFavoriteMutation,
} from '../../redux/api/favoriteApi';

interface FavoritesProps {
  userId: number;
  productId: number;
}

const Favorites: FC<FavoritesProps> = (props) => {
  const favoriteProducts = useGetFavoritesByUserIdQuery(
    props.userId
  )?.data;
  const [addFavorite] = useAddProductToFavoriteMutation();
  const [removeFavorite] = useRemoveProductFromFavoriteMutation();

  const inFavorites = Boolean(
    favoriteProducts?.some((product) => {
      return product.productId === props.productId;
    })
  );

  const handleFavoriteClick = (event: any) => {
    event.preventDefault();
    if (!props.userId) {
      return;
    }
    if (inFavorites) {
      removeFavorite({ userId: props.userId, productId: props.productId });
    } else {
      addFavorite({ userId: props.userId, productId: props.productId });
    }
  };

  return (
    <div className={styles.favorite} onClick={handleFavoriteClick}>
      {inFavorites ? (
        <img src={inFavoritesImg} alt="Favorites icon" />
      ) : (
        <img src={notFavoritesImg} alt="Add to favorites icon" />
      )}
    </div>
  );
};

export default Favorites;
