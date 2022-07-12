import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Blade,
  Blades,
  Brand,
  Brands,
  Categories,
  Category,
  GetModelsParams,
  GetModelsResponse,
  Gilding,
  Handguards,
  Handles,
  Product,
  ProductModelForPage,
  Types,
} from './types';
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
    getProductModelsByParams: builder.query<GetModelsResponse, GetModelsParams>(
      {
        query: (arg) => {
          return {
            url: 'product-model',
            params: arg,
          };
        },
      }
    ),

    getProductModelById: builder.query<ProductModelForPage, number>({
      query: (id) => 'product-model/' + id,
    }),

    getProductsByModelIdQuery: builder.query<Product[], number>({
      query: (modelId) => ({
        url: 'product',
        params: { modelId },
      }),
    }),

    getProductByIdQuery: builder.query<Product, number>({
      query: (id) => 'product/' + id,
    }),

    getCategories: builder.query<Categories, void>({
      query: () => 'category',
    }),

    getCategoryById: builder.query<Category, number>({
      query: (id) => 'category/' + id,
    }),

    getBrands: builder.query<Brands, void>({
      query: () => 'brand',
    }),

    getBrandById: builder.query<Brand, number>({
      query: (id) => 'brand/' + id,
    }),

    getBladeMaterials: builder.query<Blades, void>({
      query: () => 'blade-material',
    }),

    getBladeMaterialById: builder.query<Blade, number>({
      query: (id) => 'blade-material/' + id,
    }),

    getTypes: builder.query<Types, void>({
      query: () => 'type',
    }),

    getHandleMaterials: builder.query<Handles, void>({
      query: () => 'handle-material',
    }),

    getHandguardMaterials: builder.query<Handguards, void>({
      query: () => 'handguard-material',
    }),

    getGilding: builder.query<Gilding, void>({
      query: () => 'gilding',
    }),
  }),
});

export const {
  useGetProductModelsByParamsQuery,
  useGetProductModelByIdQuery,
  useGetProductsByModelIdQueryQuery,
  useGetProductByIdQueryQuery,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetBrandsQuery,
  useGetBrandByIdQuery,
  useGetBladeMaterialsQuery,
  useGetBladeMaterialByIdQuery,
  useGetTypesQuery,
  useGetHandleMaterialsQuery,
  useGetHandguardMaterialsQuery,
  useGetGildingQuery,
} = productsApi;
