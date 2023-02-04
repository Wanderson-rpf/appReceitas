import React from "react";
import { useNavigate } from "react-router-dom";
import { createObjRecipe } from "../helpers/FunctionsAssistants";
import {
  getDataLocalStorage,
  removeDataLocalStorage,
  saveDataLocalStorage,
} from "../services/localStorage";

function ButtonDoneRecipe({ id, isDisabled, recipe, page }) {
  const navigate = useNavigate();
  const listRecipesInProgress = getDataLocalStorage("listAllRecipesInProgress");

  const handleClick = () => {
    const newListRecipes = listRecipesInProgress.filter((item) => item.id !== id);
    const listDoneRecipes = getDataLocalStorage("doneRecipes");
    const newObj = createObjRecipe(page, recipe[0]);
    
    listDoneRecipes.push(newObj);
    saveDataLocalStorage("listAllRecipesInProgress", newListRecipes);
    saveDataLocalStorage("doneRecipes", listDoneRecipes);
    removeDataLocalStorage("recipeInProgress");
    removeDataLocalStorage(id);
    navigate("/done-recipes");
  };

  return (
    <div className="container-btn-recipe">
      <button
        disabled={isDisabled}
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
