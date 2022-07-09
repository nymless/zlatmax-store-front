import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/productsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './services/userApi';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);
