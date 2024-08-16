
import { createSlice } from '@reduxjs/toolkit';

const discountSlice = createSlice({
  name: 'discount',
  initialState: {
    selectedOption: '',
    discountCode: '',
    note: '',
  },
  reducers: {
    setOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    setDiscountCode: (state, action) => {
      state.discountCode = action.payload;
    },
    setNote: (state, action) => {
      state.note = action.payload;
    },
  },
});

export const { setOption, setDiscountCode, setNote } = discountSlice.actions;
export default discountSlice.reducer;
