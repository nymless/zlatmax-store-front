import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  appTypes: Record<number, string>;
  appCategories: Record<number, string>;
  appBrands: Record<number, string>;
  appBladeMaterials: Record<number, string>;
  appHandleMaterials: Record<number, string>;
  appHandguardMaterials: Record<number, string>;
  appGildingTypes: Record<number, string>;
}

const initialState: AppState = {
  appTypes: {},
  appCategories: {},
  appBrands: {},
  appBladeMaterials: {},
  appHandleMaterials: {},
  appHandguardMaterials: {},
  appGildingTypes: {},
};

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setAppTypes: (state, action: PayloadAction<Record<number, string>>) => {
      state.appTypes = action.payload;
    },
    setAppCategories: (
      state,
      action: PayloadAction<Record<number, string>>
    ) => {
      state.appCategories = action.payload;
    },
    setAppBrands: (state, action: PayloadAction<Record<number, string>>) => {
      state.appBrands = action.payload;
    },
    setAppBladeMaterials: (
      state,
      action: PayloadAction<Record<number, string>>
    ) => {
      state.appBladeMaterials = action.payload;
    },
    setAppHandleMaterials: (
      state,
      action: PayloadAction<Record<number, string>>
    ) => {
      state.appHandleMaterials = action.payload;
    },
    setAppHandguardMaterials: (
      state,
      action: PayloadAction<Record<number, string>>
    ) => {
      state.appHandguardMaterials = action.payload;
    },
    setAppGildingTypes: (
      state,
      action: PayloadAction<Record<number, string>>
    ) => {
      state.appGildingTypes = action.payload;
    },
  },
});

export const {
  setAppTypes,
  setAppCategories,
  setAppBrands,
  setAppBladeMaterials,
  setAppHandleMaterials,
  setAppHandguardMaterials,
  setAppGildingTypes,
} = appSlice.actions;
