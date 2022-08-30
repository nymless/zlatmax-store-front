import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CartData } from '../models/types';
import { AppPaths } from '../../variables/AppPaths';
import { Product } from '../models/models';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getProductsFromCartByUserId: builder.query<Product[], number>({
      query: (userId) => ({
        url: 'cart',
        params: { userId },
      }),
      providesTags: ['Cart'],
    }),
    addProductToCart: builder.mutation<void, CartData>({
      query: (cart) => ({
        url: 'cart',
        method: 'POST',
        body: cart,
      }),
      invalidatesTags: ['Cart'],
    }),
    removeProductFromCart: builder.mutation<void, CartData>({
      query: (cart) => ({
        url: 'cart',
        method: 'DELETE',
        body: cart,
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const {
  useGetProductsFromCartByUserIdQuery,
  useAddProductToCartMutation,
  useRemoveProductFromCartMutation,
} = cartApi;
