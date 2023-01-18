import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDataLocalStorage, saveDataLocalStorage } from "../services/localStorage";

function ButtonFavorite({recipeProp}) {
  const [favorite, setFavorite] = useState(false);
  const location = useLocation();
  const favoriteRecipe = getDataLocalStorage('favoriteRecipes');

  const verifyFavorite = () => {
    const isFavorite = favoriteRecipe
    .some((recipe) => recipe.id === recipeProp.idMeals || recipe.id === recipeProp.idDrinks);
    return isFavorite;
  };

  useEffect (() => {
    setFavorite(verifyFavorite());
  }, []);

  const handleFavorite = () => {
    if (verifyFavorite()) {
      let arrayFavoriteRecipe;
      if (location.pathname.includes('meals')) {
        arrayFavoriteRecipe = favoriteRecipe.filter((recipe) => recipe.id !== recipeProp.idMeals);
      } else if (location.pathname.includes('drinks')) {
        arrayFavoriteRecipe = favoriteRecipe.filter((recipe) => recipe.id !== recipeProp.idDrinks);
      }
      saveDataLocalStorage('favoriteRecipes', arrayFavoriteRecipe);
      setFavorite(false);
    } else {
      let newObj;
      if (location.pathname.includes('meals')) {
        newObj = {
          id: recipeProp.idMeal,
          type: 'meal',
          nationality: recipeProp.strArea,
          category: recipeProp.strCategory,
          alcoholicOrNot: '',
          name: recipeProp.strMeal,
          image: recipeProp.strMealThumb,
        };
      } else if (location.pathname.includes('drinks')){
        newObj = {
          id: recipeProp.idDrink,
          type: 'drink',
          nationality: '',
          category: recipeProp.strCategory,
          alcoholicOrNot: recipeProp.strAlcoholic,
          name: recipeProp.strDrink,
          image: recipeProp.strDrinkThumb,
        };
      }
      favoriteRecipe.push(newObj);
      saveDataLocalStorage('favoriteRecipes', favoriteRecipe);
    }
  }

  return(
    <div>
      <button type="button" onClick={ handleFavorite }>
        Favorite
      </button>
    </div>
  )
}

export default ButtonFavorite;
