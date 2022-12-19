import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    saveLogin : (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
    }
  }
});

export const { saveLogin } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
