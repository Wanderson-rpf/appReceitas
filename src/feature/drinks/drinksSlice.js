import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { recipesDrinksApi, requestCategoryDrinks } from "../../services/Api";

export const fetchCategoryDrinks = createAsyncThunk(
  'drinks/fetchCategories',
  async () => {
    const responseApi = await requestCategoryDrinks();
    return responseApi;
  }
)

export const fetchRecipesDrinks = createAsyncThunk(
  'drinks/fetchRecipeDrinks',
  async () => {
    const responseApi = await recipesDrinksApi();
    return responseApi;
  }
)

const initialState = {
  drinks: [],
  categoriesRecipeDrinks: [],
  error: null,
  recipeDrinks: [],
  recommendationsMeals: [],
};

export const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Category Drinks
    builder.addCase(fetchCategoryDrinks.fulfilled, (state, action) => {
      state.categoriesRecipeDrinks = action.payload;
    })

    // Recipes Drinks
    builder.addCase(fetchRecipesDrinks.fulfilled, (state, action) => {
      state.recipeDrinks = action.payload;
    })
  }
});

export const drinksReducer = drinksSlice.reducer;
