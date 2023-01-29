export const createObjRecipe = (pageRecipe, recipe) => {
  return {
    id: pageRecipe === 'meals' ? recipe.idMeal : recipe.idDrink,
    thumb: pageRecipe === 'meals' ? recipe.strMealThumb : recipe.strDrinkThumb,
    page: pageRecipe === 'meals' ? 'meals' : 'drinks',
    name: pageRecipe === 'meals' ? recipe.strMeal : recipe.strDrink,
    category: recipe.strCategory
  }
}

export const thumbRecipe = (page) => {
  let strName;
  if (page === "/meals") {
    strName = "strMealThumb";
  } else if (page === "/drinks") {
    strName = "strDrinkThumb";
  }
  return strName;
};

export const strNameRecipe = (page) => {
  let strName;
  if (page === "/meals") {
    strName = "strMeal";
  } else if (page === "/drinks") {
    strName = "strDrink";
  }
  return strName;
};

export const idVerify = (page) => {
  let id;
  if (page === '/meals') {
    id = 'idMeal';
  } else if (page === "/drinks")  {
    id = 'idDrink';
  }
  return id;
};

export const listIngredients = (list) => {
  const ingredientsList = list.map((element) => Object.entries(element)
  .filter((elem) => elem[0].includes('strIngredient')
  && elem[1] !== ''
  && elem[1] !== ' '
  && elem[1] !== null)
  .map((ingredients) => ingredients[1])).flat();

  return ingredientsList;
}

export const listMeasure = (list) => {
  const measureList = list.map((element) => Object.entries(element)
  .filter((elem) => elem[0].includes('strMeasure')
  && elem[1] !== ''
  && elem[1] !== ' '
  && elem[1] !== null)
  .map((ingredients) => ingredients[1])).flat();

  return measureList;
}
