import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  recipesDrinksApi, 
  requestCategoryDrinks, 
  searchRecipesDrinksFirstLetter, 
  searchRecipesDrinksIngredient, 
  searchRecipesDrinksName 
} from "../../services/Api";
import { fetchRecipesMeals } from "../meals/mealsSlice";

export const fetchSearchDrinksName = createAsyncThunk(
  'drinks/fetchSearchDrinksName',
  async (search) => {
    const responseApi = await searchRecipesDrinksName(search);
    return responseApi;
  }
)

export const fetchSearchDrinksIngredient = createAsyncThunk(
  'drinks/fetchSearchDrinksIngredient',
  async (search) => {
    const responseApi = await searchRecipesDrinksIngredient(search);
    return responseApi;
  }
)

export const fetchSearchDrinksFirstLetter = createAsyncThunk(
  'drinks/fetchSearchDrinksFirstLetter',
  async (search) => {
    const responseApi = await searchRecipesDrinksFirstLetter(search);
    return responseApi;
  }
)

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
        // Search Drinks for Name
        builder.addCase(fetchSearchDrinksName.fulfilled, (state, action) => {
          state.recipeDrinks = action.payload;
        });
    
        // Search Drinks for Ingredient
        builder.addCase(fetchSearchDrinksIngredient.fulfilled, (state, action) => {
          state.recipeDrinks = action.payload;
        });
    
        // Search Drinks for First Letter
        builder.addCase(fetchSearchDrinksFirstLetter.fulfilled, (state, action) => {
          state.recipeDrinks = action.payload;
        });

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
