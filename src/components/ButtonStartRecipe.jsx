import React from "react";
import { HiPencilAlt } from 'react-icons/hi';
import { useLocation, useNavigate } from "react-router-dom";
import {
  getDataLocalStorage,
  saveDataLocalStorage,
} from "../services/localStorage";

function ButtonStartRecipe({recipe}) {
  const location = useLocation();
  const navigate = useNavigate();
  const inProgress = getDataLocalStorage("recipeInProgress");

  const handleStartRecipe = () => {
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
