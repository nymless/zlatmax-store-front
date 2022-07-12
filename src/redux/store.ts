import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/productsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './services/userApi';
import { appSlice } from './reducers/appReducer';
import { selectedSlice } from './reducers/selectedReducer';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [appSlice.name]: appSlice.reducer,
    [selectedSlice.name]: selectedSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
