import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppPaths } from '../../variables/AppPaths';
import { User } from '../models/models';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
    prepareHeaders: (headers) => {
      // todo: token auth
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // todo: with auth
    getUser: builder.query<User, void>({
      query: () => 'user',
    }),
  }),
});

export const { useGetUserQuery } = userApi;
