import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/productsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './services/userApi';
import { appSlice } from './reducers/appReducer';
import { selectSlice } from './reducers/selectReducer';
import { cartApi } from './services/cartApi';
import { favoriteApi } from './services/favoriteApi';
import { knifeMaterialsApi } from './services/knifeMaterialsApi';
import { knifePartsApi } from './services/knifePartsApi';
import { orderApi } from './services/orderApi';
import { productDetailsApi } from './services/productDetailsApi';
import { reviewsApi } from './services/reviewsApi';
import { shippingApi } from './services/shippingApi';

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [selectSlice.name]: selectSlice.reducer,
    // API stores
    [cartApi.reducerPath]: cartApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [knifeMaterialsApi.reducerPath]: knifeMaterialsApi.reducer,
    [knifePartsApi.reducerPath]: knifePartsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [shippingApi.reducerPath]: shippingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cartApi.middleware,
      favoriteApi.middleware,
      knifeMaterialsApi.middleware,
      knifePartsApi.middleware,
      orderApi.middleware,
      productDetailsApi.middleware,
      productsApi.middleware,
      reviewsApi.middleware,
      shippingApi.middleware
    ),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
