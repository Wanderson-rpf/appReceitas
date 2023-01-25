import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  recipesDrinksApi, 
  requestAllCategoryDrinks, 
  requestCategoryDrinks, 
  requestDrinkIds, 
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
);

export const fetchSearchDrinksIngredient = createAsyncThunk(
  'drinks/fetchSearchDrinksIngredient',
  async (search) => {
    const responseApi = await searchRecipesDrinksIngredient(search);
    return responseApi;
  }
);

export const fetchSearchDrinksFirstLetter = createAsyncThunk(
  'drinks/fetchSearchDrinksFirstLetter',
  async (search) => {
    const responseApi = await searchRecipesDrinksFirstLetter(search);
    return responseApi;
  }
);

export const fetchAllCategoryDrinks = createAsyncThunk(
  'drinks/fetchAllCategoryDrinks',
  async () => {
    const responseApi = await requestAllCategoryDrinks();
    return responseApi;
  }
);

export const fetchCategoryDrinks = createAsyncThunk(
  'drinks/fetchCategories',
  async (category) => {
    const responseApi = await requestCategoryDrinks(category);
    return responseApi;
  }
);

export const fetchRecipesDrinks = createAsyncThunk(
  'drinks/fetchRecipeDrinks',
  async () => {
    const responseApi = await recipesDrinksApi();
    return responseApi;
  }
);

export const fetchSelectedDrink = createAsyncThunk(
  'drinks/fetchSelectedDrink',
  async (id) => {
    const responseApi = await requestDrinkIds(id);
    return responseApi;
  }
);

const initialState = {
  drink: [],
  categoriesRecipeDrinks: [],
  error: null,
  recipeDrinks: [],
  recommendationsMeals: [],
  recipeInProgress: [],
};

export const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    saveRecipeDrinkInProgress(state, action) {
      state.recipeInProgress = [action.payload];
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
    builder.addCase(fetchAllCategoryDrinks.fulfilled, (state, action) => {
      state.categoriesRecipeDrinks = action.payload;
    });

        // Category Filter Drinks
        builder.addCase(fetchCategoryDrinks.fulfilled, (state, action) => {
          state.recipeDrinks = action.payload;
        });

    // Recipes Drinks
    builder.addCase(fetchRecipesDrinks.fulfilled, (state, action) => {
      state.recipeDrinks = action.payload;
    });

    // Recommended meals
    builder.addCase(fetchRecipesMeals.fulfilled, (state, action) => {
      state.recommendationsMeals = action.payload;
    });

    builder.addCase(fetchSelectedDrink.fulfilled, (state, action) => {
      state.drink = action.payload;
    });
  }
});

export const { saveRecipeDrinkInProgress } = drinksSlice.actions;
export const drinksReducer = drinksSlice.reducer;
