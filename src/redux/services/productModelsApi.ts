import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../paths/AppPaths';
import { Review } from '../models/models';
import { ProductModelForProductPage } from './types';

// todo: remove productModelQuery if not needed
export const productModelsApi = createApi({
  reducerPath: 'productModelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getProductModelById: builder.query<ProductModelForProductPage, number>({
      query: (id) => 'product-model/' + id,
    }),

    // todo: pagination for review
    getReviewsByParams: builder.query<Review[], number>({
      query: (productModelId) => ({
        url: 'review',
        params: { productModelId },
      }),
    }),
    getReviewById: builder.query<Review, number>({
      query: (id) => 'review/' + id,
    }),
  }),
});

export const {
  useGetProductModelByIdQuery,
  useGetReviewsByParamsQuery,
  useGetReviewByIdQuery,
} = productModelsApi;
