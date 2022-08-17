import React, { FC } from 'react';
import styles from './Articles.module.css';
import { withContainer } from '../../../hoc/withContainer';
import { useGetArticlesQuery } from '../../../redux/services/articlesApi';
import { ArticleCard } from '../../../shared/ArticleCard/ArticleCard';

interface ArticlesProps {}

const Articles: FC<ArticlesProps> = () => {
  const articles = useGetArticlesQuery().data;

  if (!articles?.length) {
    return null;
  }

  return (
    <div className={styles.Articles}>
      <h2 className={styles.heading}>Наши статьи</h2>
      <div className={styles.articlesBlock}>
        {articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </div>
  );
};

export default withContainer(Articles);
