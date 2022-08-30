import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GenericResponse } from '../models/types';
import { userApi } from './userApi';
import { LoginValues } from '../../pages/LoginPage/LoginForm/LoginForm';
import { RegistrationValues } from '../../pages/RegistrationPage/RegistrationForm/RegistrationForm';
import { AppPaths } from '../../variables/AppPaths';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppPaths.API_URL,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<void, LoginValues>({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: { loginCredentials: data },
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(
            userApi.endpoints.getCurrentUser.initiate(null, {
              forceRefetch: true,
            })
          );
        } catch (error) {}
      },
    }),

    registerUser: builder.mutation<GenericResponse, RegistrationValues>({
      query(data) {
        return {
          url: 'registration',
          method: 'POST',
          body: { user: data },
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
