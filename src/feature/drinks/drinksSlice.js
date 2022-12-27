import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestCategoryDrinks } from "../../services/Api";

export const fetchCategoryDrinks = createAsyncThunk(
  'drinks/fetchCategories',
  async () => {
    const responseApi = await requestCategoryDrinks();
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
    builder.addCase(fetchCategoryDrinks.fulfilled, (state, action) => {
      state.categoriesRecipeDrinks = action.payload;
      console.log('reducerCategoriesDrinks', state.categoriesRecipeRrinks);
    })
  }
});

export const drinksReducer = drinksSlice.reducer;
