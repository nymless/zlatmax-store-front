import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  GetCategoriesResponse,
  GetBrandsResponse,
  GetBladeMaterialsResponse,
  GetProductModelResponse,
  GetProductModelsParams,
  GetProductModelsResponse,
  GetTypesResponse, GetHandleMaterialResponse, GetHandguardMaterialResponse, GetGildingResponse,
} from '../types';
import { AppPaths } from '../../paths/AppPaths';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
    prepareHeaders: (headers) => {
      // todo: check token expiration
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProductModelsByParams: builder.query<
      GetProductModelsResponse,
      GetProductModelsParams
    >({
      query: (arg) => {
        return {
          url: 'product-model',
          params: { ...arg },
        };
      },
    }),

    getProductModelById: builder.query<GetProductModelResponse, number>({
      query: (id) => 'product-model/' + id,
    }),

    getCategories: builder.query<GetCategoriesResponse, void>({
      query: () => 'category',
    }),

    getBrands: builder.query<GetBrandsResponse, void>({
      query: () => 'brand',
    }),

    getBladeMaterials: builder.query<GetBladeMaterialsResponse, void>({
      query: () => 'blade-material',
    }),

    getTypes: builder.query<GetTypesResponse, void>({
      query: () => 'type',
    }),

    getHandleMaterials: builder.query<GetHandleMaterialResponse, void>({
      query: () => 'handle-material',
    }),

    getHandguardMaterials: builder.query<GetHandguardMaterialResponse, void>({
      query: () => 'handguard-material',
    }),

    getGilding: builder.query<GetGildingResponse, void>({
      query: () => 'gilding',
    }),
  }),
});

export const {
  useGetProductModelsByParamsQuery,
  useGetProductModelByIdQuery,
  useGetCategoriesQuery,
  useGetBrandsQuery,
  useGetBladeMaterialsQuery,
  useGetTypesQuery,
  useGetHandleMaterialsQuery,
  useGetHandguardMaterialsQuery,
  useGetGildingQuery,
} = productsApi;
