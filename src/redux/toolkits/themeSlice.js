import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: false,
  bgColor: '#fff',
  txtColor: '#111'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle_theme: (state, action) => {
      state.dark = action.payload
      state.bgColor = action.payload ? '#111' : '#fff'
      state.txtColor = action.payload ? '#fff' : '#111'
    }
  },
})

export const { toggle_theme } = themeSlice.actions;

export default themeSlice.reducer;