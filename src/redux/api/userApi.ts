import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../models/models';
import { setUser } from '../reducers/userSlice';

const BASE_URL = process.env.REACT_APP_BASE_URL as string;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/users/`,
  }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query<User, null>({
      query: () => {
        return {
          url: 'current',
          credentials: 'include',
        };
      },
      transformResponse: (result: { data: { user: User } }) => result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
        }
      },
    }),
  }),
});
