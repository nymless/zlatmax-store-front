import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectState {
  typeId: number | null;
  categoryId: number | null;
  brandId: number | null;
  bladeMaterialId: number | null;
}

const initialState: SelectState = {
  typeId: null,
  categoryId: null,
  brandId: null,
  bladeMaterialId: null,
};

export const selectSlice = createSlice({
  name: 'selectState',
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
