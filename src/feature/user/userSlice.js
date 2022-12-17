import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  password: '',
};

export const recipeInProgressSlice = createSlice({
  name: 'recipeInProgress',
  initialState,
  reducers: {
    saveUser: (state, action) =>{
      state.email = action.payload
    }
  },
});

export const { saveUser } = recipeInProgressSlice.actions;
export default recipeInProgressSlice.reducer;
