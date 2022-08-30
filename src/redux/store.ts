import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { productsApi } from './api/productsApi';
import { userApi } from './api/userApi';
import { appSlice } from './reducers/appSlice';
import { selectSlice } from './reducers/selectSlice';
import { cartApi } from './api/cartApi';
import { favoriteApi } from './api/favoriteApi';
import { knifeMaterialsApi } from './api/knifeMaterialsApi';
import { knifePartsApi } from './api/knifePartsApi';
import { orderApi } from './api/orderApi';
import { productDetailsApi } from './api/productDetailsApi';
import { reviewsApi } from './api/reviewsApi';
import { shippingApi } from './api/shippingApi';
import { articlesApi } from './api/articlesApi';
import { authApi } from './api/authApi';
import { userSlice } from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    appState: appSlice.reducer,
    selectState: selectSlice.reducer,
    userState: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [knifeMaterialsApi.reducerPath]: knifeMaterialsApi.reducer,
    [knifePartsApi.reducerPath]: knifePartsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [shippingApi.reducerPath]: shippingApi.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      authApi.middleware,
      cartApi.middleware,
      favoriteApi.middleware,
      knifeMaterialsApi.middleware,
      knifePartsApi.middleware,
      orderApi.middleware,
      productDetailsApi.middleware,
      productsApi.middleware,
      reviewsApi.middleware,
      shippingApi.middleware,
      articlesApi.middleware
    ),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
