import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../paths/AppPaths';
import { SpecialOffer, StoreBonus } from '../models/models';
import {
  GetProductsParams,
  GetProductsResponse,
  ProductWithParts,
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
    getProductById: builder.query<ProductWithParts, number>({
      query: (id) => 'product/' + id,
    }),

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
  useGetSpecialOfferByProductIdQuery,
  useGetStoreBonusByIdQuery,
} = productsApi;
