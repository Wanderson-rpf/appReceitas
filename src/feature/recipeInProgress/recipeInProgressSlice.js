import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRecipe: [],
};

export const recipeInProgressSlice = createSlice({
  name: 'recipeInProgress',
  initialState,
  reducers: {},
});
