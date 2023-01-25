const assistantMeals = async (endpoint) => {
  const request = await fetch(endpoint);
  const response = await request.json();
  return request.ok ? Promise.resolve(response.meals) : Promise.reject(response);
};

const assistantDrinks = async (endpoint) => {
  const request = await fetch(endpoint);
  const response = await request.json();
  return request.ok ? Promise.resolve(response.drinks) : Promise.reject(response);
};

// <----------------- Request APIs de categoria ----------------->
export const requestAllCategoryMeals = async () => {
  const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  return assistantMeals(ENDPOINT);
};

export const requestCategoryMeals = async (category) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  return assistantMeals(ENDPOINT);
};

export const requestAllCategoryDrinks = async () => {
  const ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  return assistantDrinks(ENDPOINT);
};

export const requestCategoryDrinks = async (category) => {
  const ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  return assistantDrinks(ENDPOINT);
};
// <----------------- Request APIs de categoria ----------------->

// <----------------- Request APIs for ID ----------------->
export const requestMealsId = async (idRecipeMeal) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipeMeal}`;
  return assistantMeals(ENDPOINT);
};

export const requestDrinkId = async (idRecipeDrink) => {
  const ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipeDrink}`;
  return assistantDrinks(ENDPOINT);
};
// <----------------- Request APIs for ID ----------------->

// <----------------- Request APIs de Search ----------------->
export const searchRecipesMealsName = async (searchName) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName.search}`;
  return assistantMeals(ENDPOINT);
};

export const searchRecipesMealsIngredient = async (searchIngredient) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchIngredient.search}`;
  return assistantMeals(ENDPOINT);
};

export const searchRecipesMealsFirstLetter = async (searchFirstLetter) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchFirstLetter.search}`;
  return assistantMeals(ENDPOINT);
};

export const searchRecipesDrinksName = async (searchName) => {
  const ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName.search}`;
  return assistantDrinks(ENDPOINT);
};

export const searchRecipesDrinksIngredient = async (searchIngredient) => {
  const ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchIngredient.search}`;
  return assistantDrinks(ENDPOINT);
};

export const searchRecipesDrinksFirstLetter = async (searchFirstLetter) => {
  const ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchFirstLetter.search}`;
  return assistantDrinks(ENDPOINT);
};
// <----------------- Request APIs de Search ----------------->

// <----------------- Request APIs de recipes ----------------->
export const recipesMealsApi = async () => {
  const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  return assistantMeals(ENDPOINT);
};

export const recipesDrinksApi = async () => {
  const ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  return assistantDrinks(ENDPOINT);
};
// <----------------- Request APIs de recipes ----------------->
