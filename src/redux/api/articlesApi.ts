import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../variables/AppPaths';
import { Article } from '../models/models';
import { ArticleForCard } from '../models/types';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<ArticleForCard[], void>({
      query: () => 'articles',
    }),
    getArticleById: builder.query<Article, number>({
      query: (id) => 'articles/' + id,
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleByIdQuery } = articlesApi;
