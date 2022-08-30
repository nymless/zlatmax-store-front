import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../variables/AppPaths';
import { Brand, Category, Series, Type } from '../models/models';
import {
  setAppBrands,
  setAppCategories,
  setAppTypes,
} from '../reducers/appSlice';

export const productDetailsApi = createApi({
  reducerPath: 'productDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getTypes: builder.query<Type[], void>({
      query: () => 'type',
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const appTypes = {};
          data.forEach((type) => {
            Object.defineProperty(appTypes, type.id, {
              value: type.name,
              enumerable: true,
            });
          });
          dispatch(setAppTypes(appTypes));
        } catch (error) {}
      },
    }),

    getBrands: builder.query<Brand[], void>({
      query: () => 'brand',
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const appBrands = {};
          data.forEach((brand) => {
            Object.defineProperty(appBrands, brand.id, {
              value: brand.name,
              enumerable: true,
            });
          });
          dispatch(setAppBrands(appBrands));
        } catch (error) {}
      },
    }),

    getCategories: builder.query<Category[], void>({
      query: () => 'category',
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const appCategories = {};
          data.forEach((category) => {
            Object.defineProperty(appCategories, category.id, {
              value: category.name,
              enumerable: true,
            });
          });
          dispatch(setAppCategories(appCategories));
        } catch (error) {}
      },
    }),

    getSeries: builder.query<Series[], void>({
      query: () => 'series',
    }),
  }),
});

export const { useGetTypesQuery, useGetBrandsQuery, useGetCategoriesQuery } =
  productDetailsApi;
