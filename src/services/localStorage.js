if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
  localStorage.setItem('favoriteRecipes', JSON.stringify([]));
};

if (!JSON.parse(localStorage.getItem('listAllRecipesInProgress'))) {
  localStorage.setItem('listAllRecipesInProgress', JSON.stringify([]));
};

if (!JSON.parse(localStorage.getItem('recipeInProgress'))) {
  localStorage.setItem('recipeInProgress', JSON.stringify([]));
};

if (!JSON.parse(localStorage.getItem('doneRecipes'))) {
  localStorage.setItem('doneRecipes', JSON.stringify([]));
};

export const getDataLocalStorage = (label) => {
  const data = JSON.parse(localStorage.getItem(label));
  return data;
};

export const saveDataLocalStorage = (label, data) => {
  localStorage.setItem(label, JSON.stringify(data));
};

export const saveNewDataLocalStorage = (label, data) => {
  const previousData = getDataLocalStorage(label);
  saveDataLocalStorage(label, [...previousData, data]);
};

export const removeDataLocalStorage = (label) => {
  localStorage.removeItem(label)
};
