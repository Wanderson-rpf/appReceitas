import React from "react";
import { HiPencilAlt } from 'react-icons/hi';
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { saveRecipeInProgress } from "../feature/meals/mealsSlice";

import {
  getDataLocalStorage,
  saveDataLocalStorage,
} from "../services/localStorage";

function ButtonStartRecipe({recipe}) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const inProgress = getDataLocalStorage("recipeInProgress");

  const handleStartRecipe = () => {
    dispacth(saveRecipeInProgress(recipe));
    inProgress.push(recipe);
    saveDataLocalStorage("recipeInProgress", inProgress);
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
