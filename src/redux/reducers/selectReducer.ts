import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateSelected } from './types';

const initialState: InitialStateSelected = {
  typeId: null,
  categoryId: null,
  brandId: null,
  bladeMaterialId: null,
};

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    resetSelectedIds: (state) => {
      state.typeId = null;
      state.categoryId = null;
      state.brandId = null;
      state.bladeMaterialId = null;
    },
    setSelectedTypeId: (state, action: PayloadAction<number>) => {
      state.typeId = action.payload;
    },
    setSelectedCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSelectedBrandId: (state, action: PayloadAction<number>) => {
      state.brandId = action.payload;
    },
    setSelectedBladeMaterialId: (state, action: PayloadAction<number>) => {
      state.bladeMaterialId = action.payload;
    },
  },
});

export const {
  resetSelectedIds,
  setSelectedTypeId,
  setSelectedCategoryId,
  setSelectedBrandId,
  setSelectedBladeMaterialId,
} = selectSlice.actions;
