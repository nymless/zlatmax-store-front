import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../paths/AppPaths';
import { City, Country, Shipping } from '../models/models';
import { GetCitiesParams, GetShippingParams } from './types';

export const shippingApi = createApi({
  reducerPath: 'shippingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getCounties: builder.query<Country[], void>({
      query: () => 'country',
    }),

    getCitiesByParams: builder.query<City[], GetCitiesParams>({
      query: (params) => ({
        url: 'city',
        params,
      }),
    }),

    getShippingByParams: builder.query<Shipping[], GetShippingParams>({
      query: (params) => ({
        url: 'shipping',
        params,
      }),
    }),
  }),
});

export const {
  useGetCountiesQuery,
  useGetCitiesByParamsQuery,
  useGetShippingByParamsQuery,
} = shippingApi;
