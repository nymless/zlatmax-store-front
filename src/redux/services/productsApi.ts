import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../variables/AppPaths';
import { SpecialOffer, StoreBonus } from '../models/models';
import {
  GetProductsParams,
  GetProductsResponse,
  ProductModelForProductPage, ProductWithMaterials,
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
    getProductById: builder.query<ProductModelForProductPage, number>({
      query: (id) => 'product/' + id,
    }),

    getTopSellers: builder.query<ProductWithMaterials[], void>({
      query: () => 'product/top-sellers',
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
  }),
});

export const {
  useGetProductsByParamsQuery,
  useGetProductByIdQuery,
  useGetTopSellersQuery,
  useGetSpecialOfferByProductIdQuery,
  useGetStoreBonusByIdQuery,
} = productsApi;
