import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { recipesMealsApi, requestCategoryMeals } from "../../services/Api";

export const fetchCategoryMeals = createAsyncThunk(
  'meals/fetchCategories',
  async () => {
    const responseApi = await requestCategoryMeals();
    return responseApi;
  }
)

export const fetchRecipesMeals = createAsyncThunk(
  'meals/fetchRecipeMeals',
  async () => {
    const responseApi = await recipesMealsApi();
    return responseApi;
  }
)

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
  extraReducers: (builder) => {
    // Categories Meals
    builder.addCase(fetchCategoryMeals.fulfilled, (state, action) => {
      state.categoriesRecipeMeals = action.payload;
    });

    // Recipes Meals
    builder.addCase(fetchRecipesMeals.fulfilled, (state, action) => {
      state.recipeMeals = action.payload;
      console.log('reducerRecipes', state.recipeMeals);
    })
  }
});

export const mealsReducer = mealsSlice.reducer;
