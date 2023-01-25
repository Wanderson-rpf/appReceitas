import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  recipesMealsApi, 
  requestAllCategoryMeals, 
  requestCategoryMeals, 
  requestMealsId, 
  searchRecipesMealsFirstLetter, 
  searchRecipesMealsIngredient, 
  searchRecipesMealsName,  
} from "../../services/Api";
import { fetchRecipesDrinks } from "../drinks/drinksSlice";

export const fetchSearchMealsName = createAsyncThunk(
  'meals/fetchSearchMealsName',
  async (search) => {
    const responseApi = await searchRecipesMealsName(search);
    return responseApi;
  }
);

export const fetchSearchMealsIngredient = createAsyncThunk(
  'meals/fetchSearchMealsIngredient',
  async (search) => {
    const responseApi = await searchRecipesMealsIngredient(search);
    return responseApi;
  }
);

export const fetchSearchMealsFirstLetter = createAsyncThunk(
  'meals/fetchSearchMealsFirstLetter',
  async (search) => {
    const responseApi = await searchRecipesMealsFirstLetter(search);
    return responseApi;
  }
);

export const fetchAllCategoryMeals = createAsyncThunk(
  'meals/fetchAllCategoryMeals',
  async () => {
    const responseApi = await requestAllCategoryMeals();
    return responseApi;
  }
);

export const fetchCategoryMeals = createAsyncThunk(
  'meals/fetchCategoryMeals',
  async (category) => {
    const responseApi = await requestCategoryMeals(category);
    return responseApi;
  }
);

export const fetchRecipesMeals = createAsyncThunk(
  'meals/fetchRecipesMeals',
  async () => {
    const responseApi = await recipesMealsApi();
    return responseApi;
  }
);

export const fetchSelectedMeal = createAsyncThunk(
  'meals/fetchSelectedMeal',
  async (id) => {
    const responseApi = await requestMealsId(id);
    return responseApi;
  }
);

const initialState = {
  meal: [],
  categoriesRecipeMeals: [],
  error: null,
  recipeMeals: [],
  recommendationsDrinks: [],
  recipeInProgress: [],
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    saveRecipeInProgress(state, action) {
      state.recipeInProgress = [action.payload];
    }
  },
  extraReducers: (builder) => {
    // Search Meals for Name
    builder.addCase(fetchSearchMealsName.fulfilled, (state, action) => {
      state.recipeMeals = action.payload;
    });

    // Search Meals for Ingredient
    builder.addCase(fetchSearchMealsIngredient.fulfilled, (state, action) => {
      state.recipeMeals = action.payload;
    });

    // Search Meals for First Letter
    builder.addCase(fetchSearchMealsFirstLetter.fulfilled, (state, action) => {
      state.recipeMeals = action.payload;
    });

    // Categories Meals
    builder.addCase(fetchAllCategoryMeals.fulfilled, (state, action) => {
      state.categoriesRecipeMeals = action.payload;
    });

    // Categories Filter Meals
    builder.addCase(fetchCategoryMeals.fulfilled, (state, action) => {
      state.recipeMeals = action.payload;
    });

    // Recipes Meals
    builder.addCase(fetchRecipesMeals.fulfilled, (state, action) => {
      state.recipeMeals = action.payload;
    });

    // Recommended drinks
    builder.addCase(fetchRecipesDrinks.fulfilled, (state, action) => {
      state.recommendationsDrinks = action.payload;
    });

    // Meal Selected
    builder.addCase(fetchSelectedMeal.fulfilled, (state, action) => {
      state.meal = action.payload;
    });
  }
});

export const mealsReducer = mealsSlice.reducer;
export const { saveRecipeInProgress } = mealsSlice.actions;
