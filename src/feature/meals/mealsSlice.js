import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
  categoriesRecipeMeals: [],
  error: null,
  recipeMeals: [],
  recommendationsDrinks: [],
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
});