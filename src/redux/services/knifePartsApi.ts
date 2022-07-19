import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../paths/AppPaths';
import { Blade, Gilding, Handguard, Handle } from '../models/models';

export const knifePartsApi = createApi({
  reducerPath: 'knifePartsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getHandlesByParams: builder.query<Handle[], number>({
      query: (productModelId) => ({
        url: 'handle',
        params: { productModelId },
      }),
    }),
    getHandleById: builder.query<Handle, number>({
      query: (id) => 'handle/' + id,
    }),

    getHandguardsByParams: builder.query<Handguard[], number>({
      query: (productModelId) => ({
        url: 'handguard',
        params: { productModelId },
      }),
    }),
    getHandguardById: builder.query<Handguard, number>({
      query: (id) => 'handguard/' + id,
    }),

    getBladesByParams: builder.query<Blade[], number>({
      query: (productModelId) => ({
        url: 'blade',
        params: { productModelId },
      }),
    }),
    getBladeById: builder.query<Blade, number>({
      query: (id) => 'blade/' + id,
    }),

    getGilding: builder.query<Gilding[], void>({
      query: () => 'gilding',
    }),
    getGildingById: builder.query<Gilding, number>({
      query: (id) => 'gilding/' + id,
    }),
  }),
});

export const {
  useGetHandlesByParamsQuery,
  useGetHandleByIdQuery,
  useGetHandguardsByParamsQuery,
  useGetHandguardByIdQuery,
  useGetBladesByParamsQuery,
  useGetBladeByIdQuery,
  useGetGildingQuery,
  useGetGildingByIdQuery,
} = knifePartsApi;
