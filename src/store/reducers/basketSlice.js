import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'showBasket',
  initialState: {
    value: false,
  },
  reducers: {
    showBasket: state => {
      state.value = true;
      document.body.style.overflowY = "hidden"
    },
    hideBasket: state => {
      state.value = false;
      document.body.style.overflowY = "auto"
    }
  },
});

export const { showBasket, hideBasket } = basketSlice.actions;

export default basketSlice.reducer;