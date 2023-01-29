import React from "react";
import { useNavigate } from "react-router-dom";
import { getDataLocalStorage, saveDataLocalStorage } from "../services/localStorage";

function ButtonDeleteRecipeInProgress({id}) {
  const navigate = useNavigate();
  const listRecipesInProgress = getDataLocalStorage("listAllRecipesInProgress");

  const handleClick = () => {
    const newListRecipes = listRecipesInProgress.filter((item) => item.id !== id)
    saveDataLocalStorage("listAllRecipesInProgress", newListRecipes);
    navigate('/recipes-in-progress');
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
