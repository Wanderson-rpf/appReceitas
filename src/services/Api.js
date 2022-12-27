// <----------------- Request APIs de categoria ----------------->
export const requestCategoryMeals = async () => {
  const END_POINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const request = await fetch(END_POINT);
  const response = await request.json();
  return request.ok ? Promise.resolve(response.meals) : Promise.reject(response);
};

export const requestCategoryDrinks = async () => {
  const END_POINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const request = await fetch(END_POINT);
  const response = await request.json();
  return request.ok ? Promise.resolve(response.drinks) : Promise.reject(response);
};
// <----------------- Request APIs de categoria ----------------->


// <----------------- Request APIs de recipes ----------------->
export const recipesMealsApi = async () => {
  const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const request = await fetch(ENDPOINT);
  const response = await request.json();
  return request.ok ? Promise.resolve(response.meals) : Promise.reject(response);
};

export const recipesDrinksApi = async () => {
  const ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const request = await fetch(ENDPOINT);
  const response = await request.json();
  return request.ok ? Promise.resolve(response.drinks) : Promise.reject(response);
};
// <----------------- Request APIs de recipes ----------------->
