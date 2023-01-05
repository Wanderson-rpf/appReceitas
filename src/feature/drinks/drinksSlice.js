import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { recipesDrinksApi, requestCategoryDrinks } from "../../services/Api";
import { fetchRecipesMeals } from "../meals/mealsSlice";

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
  reducers: {
    selectDrinksRecipe : (state, action) => {
      state.drinks = action.payload
    }
  },
  extraReducers: (builder) => {
    // Category Drinks
    builder.addCase(fetchCategoryDrinks.fulfilled, (state, action) => {
      state.categoriesRecipeDrinks = action.payload;
    });

    // Recipes Drinks
    builder.addCase(fetchRecipesDrinks.fulfilled, (state, action) => {
      state.recipeDrinks = action.payload;
    });

    // Recommended meals
    builder.addCase(fetchRecipesMeals.fulfilled, (state, action) => {
      state.recommendationsMeals = action.payload;
    });
  }
});

export const { selectDrinksRecipe } = drinksSlice.actions;
export const drinksReducer = drinksSlice.reducer;
