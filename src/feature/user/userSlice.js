import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action) =>{
      state.name = action.payload.name
      state.email = action.payload.email
      state.password = action.payload.password
    }
  },
});

export const { saveUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
