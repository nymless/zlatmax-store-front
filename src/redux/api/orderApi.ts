import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { OrderData } from '../models/types';
import { AppPaths } from '../../variables/AppPaths';
import { Order, Product } from '../models/models';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getOrdersByUserId: builder.query<Order[], number>({
      query: (userId) => ({
        url: 'order',
        params: { userId },
      }),
    }),
    createOrder: builder.mutation<void, OrderData>({
      query: (order) => ({
        url: 'order',
        method: 'POST',
        body: order,
      }),
    }),

    getProductsByOrderId: builder.query<Product[], number>({
      query: (orderId) => ({
        url: 'order-product',
        params: { orderId },
      }),
    }),
  }),
});

export const {
  useGetOrdersByUserIdQuery,
  useCreateOrderMutation,
  useGetProductsByOrderIdQuery,
} = orderApi;
