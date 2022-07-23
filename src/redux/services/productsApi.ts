import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../paths/AppPaths';
import { Review, SpecialOffer, StoreBonus } from '../models/models';
import {
  GetProductsParams,
  GetProductsResponse,
  ProductModelForProductPage,
} from './types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getProductsByParams: builder.query<GetProductsResponse, GetProductsParams>({
      query: (params) => {
        return {
          url: 'product',
          params: params,
        };
      },
    }),
    getProductById: builder.query<ProductModelForProductPage, number>({
      query: (id) => 'product/' + id,
    }),

    // todo: separate
    getSpecialOfferByProductId: builder.query<SpecialOffer, number>({
      query: (productId) => ({
        url: 'special-offer',
        params: { productId },
      }),
    }),

    getStoreBonusById: builder.query<StoreBonus[], number>({
      query: (id) => 'store-bonus' + id,
    }),

    // todo: pagination for review
    getReviewsByParams: builder.query<Review[], number>({
      query: (productId) => ({
        url: 'review',
        params: { productId },
      }),
    }),
    getReviewById: builder.query<Review, number>({
      query: (id) => 'review/' + id,
    }),
  }),
});

export const {
  useGetProductsByParamsQuery,
  useGetProductByIdQuery,
  useGetSpecialOfferByProductIdQuery,
  useGetStoreBonusByIdQuery,
  useGetReviewsByParamsQuery,
  useGetReviewByIdQuery,
} = productsApi;
