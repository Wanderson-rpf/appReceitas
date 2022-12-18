import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drinks: [],
  categoriesRecipeRrinks: [],
  error: null,
  recipeDrinks: [],
  recommendationsMeals: [],
};

export const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
});