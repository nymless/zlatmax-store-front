import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../variables/AppPaths';
import {
  GetProductsParams,
  GetProductsResponse,
  ProductForProductCard,
  ProductForProductPage,
} from './types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getProductsByParams: builder.query<GetProductsResponse, GetProductsParams>({
      query: (params) => ({
        url: 'product',
        params: params,
      }),
    }),
    getProductById: builder.query<ProductForProductPage, number>({
      query: (id) => 'product/' + id,
    }),

    getSpecialOffers: builder.query<ProductForProductCard[], void>({
      query: () => 'product/special-offers',
    }),

    getTopSellers: builder.query<ProductForProductCard[], void>({
      query: () => 'product/top-sellers',
    }),

    getNewProducts: builder.query<ProductForProductCard[], void>({
      query: () => 'product/new-products',
    }),
  }),
});

export const {
  useGetProductsByParamsQuery,
  useGetProductByIdQuery,
  useGetSpecialOffersQuery,
  useGetTopSellersQuery,
  useGetNewProductsQuery,
} = productsApi;
