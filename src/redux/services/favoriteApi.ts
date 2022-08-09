import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FavoriteData } from './types';
import { AppPaths } from '../../variables/AppPaths';
import { Favorite } from '../models/models';

export const favoriteApi = createApi({
  reducerPath: 'favoriteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  tagTypes: ['Favorite'],
  endpoints: (builder) => ({
    getFavoritesByUserId: builder.query<Favorite[], number>({
      query: (userId) => ({
        url: 'favorites',
        params: { userId },
      }),
      providesTags: ['Favorite'],
    }),
    addProductToFavorite: builder.mutation<void, FavoriteData>({
      query: (favoriteData) => ({
        url: 'favorites',
        method: 'POST',
        body: favoriteData,
      }),
      invalidatesTags: ['Favorite'],
    }),
    removeProductFromFavorite: builder.mutation<void, FavoriteData>({
      query: (favoriteData) => ({
        url: 'favorites',
        method: 'DELETE',
        body: favoriteData,
      }),
      invalidatesTags: ['Favorite'],
    }),
  }),
});

export const {
  useGetFavoritesByUserIdQuery,
  useAddProductToFavoriteMutation,
  useRemoveProductFromFavoriteMutation,
} = favoriteApi;
