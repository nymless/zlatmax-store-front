import React, { FC } from 'react';
import styles from './ArticleCard.module.scss';
import { Link } from 'react-router-dom';
import { AppPaths } from '../../variables/AppPaths';
import { ArticleForCard } from '../../redux/models/types';
import { AppRouts } from '../../variables/AppRouts';

type ArticleCardProps = {
  article: ArticleForCard;
};

export const ArticleCard: FC<ArticleCardProps> = (props) => {
  const dateFormatter = new Intl.DateTimeFormat('ru');
  const date = new Date(props.article.date);

  return (
    <article className={styles.ArticleCard}>
      <Link
        className={styles.link}
        to={AppRouts.ARTICLES + '/' + props.article.id}
      >
        <img
          className={styles.img}
          src={AppPaths.IMG_URL + props.article.img}
          alt={'Статья'}
        />
        <div className={styles.descriptionBlock}>
          <h3 className={styles.title}>{props.article.title}</h3>
          <p className={styles.date}>{dateFormatter.format(date)}</p>
        </div>
      </Link>
    </article>
  );
};
