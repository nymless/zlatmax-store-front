import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../paths/AppPaths';
import {
  BladeMaterial,
  GildingType,
  HandguardMaterial,
  HandleMaterial,
} from '../models/models';

export const knifeMaterialsApi = createApi({
  reducerPath: 'knifeMaterialsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getHandleMaterials: builder.query<HandleMaterial[], void>({
      query: () => 'handle-material',
    }),
    getHandleMaterialById: builder.query<HandleMaterial, number>({
      query: (id) => 'handle-material/' + id,
    }),

    getHandguardMaterials: builder.query<HandguardMaterial[], void>({
      query: () => 'handguard-material',
    }),
    getHandguardMaterialById: builder.query<HandguardMaterial, number>({
      query: (id) => 'handguard-material/' + id,
    }),

    getBladeMaterials: builder.query<BladeMaterial[], void>({
      query: () => 'blade-material',
    }),
    getBladeMaterialById: builder.query<BladeMaterial, number>({
      query: (id) => 'blade-material/' + id,
    }),

    getGildingTypes: builder.query<GildingType[], void>({
      query: () => 'gilding-type',
    }),
    getGildingTypeById: builder.query<GildingType, number>({
      query: (id) => 'gilding-type/' + id,
    }),
  }),
});

export const {
  useGetHandleMaterialsQuery,
  useGetHandleMaterialByIdQuery,
  useGetHandguardMaterialsQuery,
  useGetHandguardMaterialByIdQuery,
  useGetBladeMaterialsQuery,
  useGetBladeMaterialByIdQuery,
  useGetGildingTypesQuery,
  useGetGildingTypeByIdQuery,
} = knifeMaterialsApi;
