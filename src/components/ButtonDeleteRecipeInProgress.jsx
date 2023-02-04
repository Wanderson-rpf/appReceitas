import React from "react";
import { getDataLocalStorage, removeDataLocalStorage, saveDataLocalStorage } from "../services/localStorage";

function ButtonDeleteRecipeInProgress({id, func}) {
  const listRecipesInProgress = getDataLocalStorage("listAllRecipesInProgress");

  const handleClick = () => {
    const newListRecipes = listRecipesInProgress.filter((item) => item.id !== id)
    saveDataLocalStorage("listAllRecipesInProgress", newListRecipes);
    saveDataLocalStorage("recipeInProgress", []);
    removeDataLocalStorage(id);
    func();
  };

  return (
    <div className="container-btn-recipe">
      <button 
        type="button" 
        onClick={ handleClick }
        className="btn-go-recipe">Excluir</button>
    </div>
  );
}

export default ButtonDeleteRecipeInProgress;
