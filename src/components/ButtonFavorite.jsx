import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDataLocalStorage, saveDataLocalStorage } from "../services/localStorage";

function ButtonFavorite({recipeProp}) {
  const [favorite, setFavorite] = useState(false);
  const location = useLocation();
  const favoriteRecipe = getDataLocalStorage('favoriteRecipes');

  const verifyFavorite = () => {
    const isFavorite = favoriteRecipe
    .some((recipe) => recipe.id === recipeProp.idMeal || recipe.id === recipeProp.idDrink);
    return isFavorite;
  };

  const favoriteSelected = () => {
    let newFavorite;
      if (location.pathname.includes('meals')) {
        newFavorite = {
          id: recipeProp.idMeal,
          type: 'meal',
          nationality: recipeProp.strArea,
          category: recipeProp.strCategory,
          alcoholicOrNot: '',
          name: recipeProp.strMeal,
          image: recipeProp.strMealThumb,
        };
      } else if (location.pathname.includes('drinks')){
        newFavorite = {
          id: recipeProp.idDrink,
          type: 'drink',
          nationality: '',
          category: recipeProp.strCategory,
          alcoholicOrNot: recipeProp.strAlcoholic,
          name: recipeProp.strDrink,
          image: recipeProp.strDrinkThumb,
        };
      }
    favoriteRecipe.push(newFavorite);
    saveDataLocalStorage('favoriteRecipes', favoriteRecipe);
    return newFavorite;
  }

  const removeFavorite = () => {
    let arrayFavoriteRecipe;
      if (location.pathname.includes('meals')) {
        arrayFavoriteRecipe = favoriteRecipe.filter((recipe) => recipe.id !== recipeProp.idMeal);
      } else if (location.pathname.includes('drinks')) {
        arrayFavoriteRecipe = favoriteRecipe.filter((recipe) => recipe.id !== recipeProp.idDrink);
      }
      saveDataLocalStorage('favoriteRecipes', arrayFavoriteRecipe);
      setFavorite(false);
  }

  useEffect (() => {
    setFavorite(verifyFavorite());
  }, []);

  const handleFavorite = () => {
    if (verifyFavorite()) {
      removeFavorite();
    } else {
      favoriteSelected();
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
