import React, { FC } from 'react';
import styles from './Articles.module.css';
import { AppContainer } from '../../../shared/AppContainer/AppContainer';
import { useGetArticlesQuery } from '../../../redux/api/articlesApi';
import { ArticleCard } from '../../../shared/ArticleCard/ArticleCard';

interface ArticlesProps {}

const Articles: FC<ArticlesProps> = () => {
  const articles = useGetArticlesQuery().data;

  if (!articles?.length) {
    return null;
  }

  return (
    <AppContainer>
      <div className={styles.Articles}>
        <h2 className={styles.heading}>Наши статьи</h2>
        <div className={styles.articlesBlock}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </AppContainer>
  );
};

export default Articles;
