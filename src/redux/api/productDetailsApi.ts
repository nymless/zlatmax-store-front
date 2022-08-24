import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../variables/AppPaths';
import { Brand, Category, Series, Type } from '../models/models';

export const productDetailsApi = createApi({
  reducerPath: 'productDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getTypes: builder.query<Type[], void>({
      query: () => 'type',
    }),
    getTypeById: builder.query<Type, number>({
      query: (id) => 'type/' + id,
    }),

    getBrands: builder.query<Brand[], void>({
      query: () => 'brand',
    }),
    getBrandById: builder.query<Brand, number>({
      query: (id) => 'brand/' + id,
    }),

    getCategories: builder.query<Category[], void>({
      query: () => 'category',
    }),
    getCategoryById: builder.query<Category, number>({
      query: (id) => 'category/' + id,
    }),

    getSeries: builder.query<Series[], void>({
      query: () => 'series',
    }),
    getSeriesById: builder.query<Series, number>({
      query: (id) => 'series/' + id,
    }),
  }),
});

export const {
  useGetTypesQuery,
  useGetTypeByIdQuery,
  useGetBrandsQuery,
  useGetBrandByIdQuery,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetSeriesQuery,
  useGetSeriesByIdQuery,
} = productDetailsApi;
