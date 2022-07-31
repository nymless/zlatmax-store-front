import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../paths/AppPaths';
import { Review } from '../models/models';
import { GetReviewsParams, GetReviewsResponse } from './types';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getReviewsByParams: builder.query<GetReviewsResponse, GetReviewsParams>({
      query: (params) => ({
        url: 'review',
        params: params,
      }),
    }),
    getReviewById: builder.query<Review, number>({
      query: (id) => 'review/' + id,
    }),
  }),
});

export const { useGetReviewsByParamsQuery, useGetReviewByIdQuery } = reviewsApi;
