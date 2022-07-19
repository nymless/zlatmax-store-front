import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/productsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './services/userApi';
import { appSlice } from './reducers/appReducer';
import { selectedSlice } from './reducers/selectedReducer';
import { productModelsApi } from './services/productModelsApi';
import { cartApi } from './services/cartApi';
import { favoriteApi } from './services/favoriteApi';
import { knifeMaterialsApi } from './services/knifeMaterialsApi';
import { knifePartsApi } from './services/knifePartsApi';
import { orderApi } from './services/orderApi';
import { productDetailsApi } from './services/productDetailsApi';

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [selectedSlice.name]: selectedSlice.reducer,
    // API stores
    [cartApi.reducerPath]: cartApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [knifeMaterialsApi.reducerPath]: knifeMaterialsApi.reducer,
    [knifePartsApi.reducerPath]: knifePartsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
    [productModelsApi.reducerPath]: productModelsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cartApi.middleware,
      favoriteApi.middleware,
      knifeMaterialsApi.middleware,
      knifePartsApi.middleware,
      orderApi.middleware,
      productDetailsApi.middleware,
      productModelsApi.middleware,
      productsApi.middleware,
      userApi.middleware
    ),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
