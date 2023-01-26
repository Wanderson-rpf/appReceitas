import React from "react";
import { useNavigate } from "react-router-dom";
import {
  getDataLocalStorage, 
  removeDataLocalStorage, 
  saveDataLocalStorage
} from "../services/localStorage";

function ButtonDoneRecipe({ id, isDisabled, recipe, page }) {
  const navigate = useNavigate();
  const listRecipesInProgress = getDataLocalStorage("listAllRecipesInProgress");

  const handleClick = () => {
    let newListRecipes;
    if (page === 'meals') {
      newListRecipes = listRecipesInProgress.filter((item) => item.idMeal !== id)
    } else if (page === 'drinks') {
      newListRecipes = listRecipesInProgress.filter((item) => item.idDrink !== id)
    }
    saveDataLocalStorage("listAllRecipesInProgress", newListRecipes);
    saveDataLocalStorage("doneRecipes", recipe);
    removeDataLocalStorage("recipeInProgress");
    removeDataLocalStorage(id);
    navigate('/done-recipes');
  };

  return (
    <div className="container-btn-recipe">
      <button
        disabled={ isDisabled }
        type="button"
        onClick={handleClick}
        className="btn-recipe"
      >
        Finalizar receita
      </button>
    </div>
  );
}

export default ButtonDoneRecipe;
