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
