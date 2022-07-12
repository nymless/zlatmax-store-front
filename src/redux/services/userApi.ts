import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FavoriteData, Favorites, User } from './types';
import { AppPaths } from '../../paths/AppPaths';

export const userApi = createApi({
  reducerPath: 'userApi',
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
  tagTypes: ['Favorites'],
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => 'user',
    }),

    getFavorites: builder.query<Favorites, number>({
      query: (userId) => ({
        url: 'favorites',
        params: { userId },
      }),
      providesTags: ['Favorites'],
    }),

    addFavorite: builder.mutation<void, FavoriteData>({
      query: (favorite) => ({
        url: 'favorites',
        method: 'POST',
        body: favorite,
      }),
      invalidatesTags: ['Favorites'],
    }),

    removeFavorite: builder.mutation<void, FavoriteData>({
      query: (favorite) => ({
        url: 'favorites',
        method: 'DELETE',
        body: favorite,
      }),
      invalidatesTags: ['Favorites'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} = userApi;
