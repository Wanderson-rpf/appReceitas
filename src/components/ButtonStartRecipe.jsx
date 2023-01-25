import React from "react";
import { HiPencilAlt } from 'react-icons/hi';
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { saveRecipeDrinkInProgress } from "../feature/drinks/drinksSlice";
import { saveRecipeMealInProgress } from "../feature/meals/mealsSlice";

import {
  getDataLocalStorage,
  saveDataLocalStorage,
} from "../services/localStorage";

function ButtonStartRecipe({recipe, page}) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const inProgress = getDataLocalStorage("listAllRecipesInProgress");

  const handleStartRecipe = () => {
    if (page === 'meals') {
      dispacth(saveRecipeMealInProgress(recipe));
    } else if (page === 'drinks') {
      dispacth(saveRecipeDrinkInProgress(recipe));
    }
    inProgress.push(recipe);
    saveDataLocalStorage("listAllRecipesInProgress", inProgress);
    saveDataLocalStorage("recipeInProgress", [recipe])
    navigate(`${location.pathname}/in-progress`);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleStartRecipe}
        className="btn-start-recipe"
      >
        Iniciar receita<HiPencilAlt />
      </button>
    </div>
  )
}

export default ButtonStartRecipe;
