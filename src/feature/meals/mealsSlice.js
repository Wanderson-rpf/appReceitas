import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  recipesMealsApi, 
  requestCategoryMeals, 
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
)

export const fetchSearchMealsIngredient = createAsyncThunk(
  'meals/fetchSearchMealsIngredient',
  async (search) => {
    const responseApi = await searchRecipesMealsIngredient(search);
    return responseApi;
  }
)

export const fetchSearchMealsFirstLetter = createAsyncThunk(
  'meals/fetchSearchMealsFirstLetter',
  async (search) => {
    const responseApi = await searchRecipesMealsFirstLetter(search);
    return responseApi;
  }
)

export const fetchCategoryMeals = createAsyncThunk(
  'meals/fetchCategoryMeals',
  async () => {
    const responseApi = await requestCategoryMeals();
    return responseApi;
  }
)

export const fetchRecipesMeals = createAsyncThunk(
  'meals/fetchRecipesMeals',
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
  reducers: {
    selectMealsRecipe : (state, action) => {
      state.meals = action.payload
    },
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
    builder.addCase(fetchCategoryMeals.fulfilled, (state, action) => {
      state.categoriesRecipeMeals = action.payload;
    });

    // Recipes Meals
    builder.addCase(fetchRecipesMeals.fulfilled, (state, action) => {
      state.recipeMeals = action.payload;
    });

    // Recommended drinks
    builder.addCase(fetchRecipesDrinks.fulfilled, (state, action) => {
      state.recommendationsDrinks = action.payload;
    })
  }
});

export const { selectMealsRecipe } = mealsSlice.actions;
export const mealsReducer = mealsSlice.reducer;
