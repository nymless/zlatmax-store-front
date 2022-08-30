import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../variables/AppPaths';
import {
  BladeMaterial,
  GildingType,
  HandguardMaterial,
  HandleMaterial,
} from '../models/models';
import {
  setAppBladeMaterials,
  setAppCategories, setAppGildingTypes,
  setAppHandguardMaterials,
  setAppHandleMaterials,
} from '../reducers/appSlice';

export const knifeMaterialsApi = createApi({
  reducerPath: 'knifeMaterialsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    getHandleMaterials: builder.query<HandleMaterial[], void>({
      query: () => 'handle-material',
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const appHandleMaterials = {};
          data.forEach((handleMaterial) => {
            Object.defineProperty(appHandleMaterials, handleMaterial.id, {
              value: handleMaterial.name,
              enumerable: true,
            });
          });
          dispatch(setAppHandleMaterials(appHandleMaterials));
        } catch (error) {}
      },
    }),

    getHandguardMaterials: builder.query<HandguardMaterial[], void>({
      query: () => 'handguard-material',
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const appHandguardMaterials = {};
          data.forEach((handguardMaterial) => {
            Object.defineProperty(appHandguardMaterials, handguardMaterial.id, {
              value: handguardMaterial.name,
              enumerable: true,
            });
          });
          dispatch(setAppHandguardMaterials(appHandguardMaterials));
        } catch (error) {}
      },
    }),

    getBladeMaterials: builder.query<BladeMaterial[], void>({
      query: () => 'blade-material',
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const appBladeMaterials = {};
          data.forEach((bladeMaterial) => {
            Object.defineProperty(appBladeMaterials, bladeMaterial.id, {
              value: bladeMaterial.name,
              enumerable: true,
            });
          });
          dispatch(setAppBladeMaterials(appBladeMaterials));
        } catch (error) {}
      },
    }),

    getGildingTypes: builder.query<GildingType[], void>({
      query: () => 'gilding-type',
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const appGildingTypes = {};
          data.forEach((gildingType) => {
            Object.defineProperty(appGildingTypes, gildingType.id, {
              value: gildingType.name,
              enumerable: true,
            });
          });
          dispatch(setAppGildingTypes(appGildingTypes));
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useGetHandleMaterialsQuery,
  useGetHandguardMaterialsQuery,
  useGetBladeMaterialsQuery,
  useGetGildingTypesQuery,
} = knifeMaterialsApi;
