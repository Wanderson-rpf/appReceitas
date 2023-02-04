import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchRecipeDrinkInProgress } from "../feature/drinks/drinksSlice";
import { fetchRecipeMealInProgress } from "../feature/meals/mealsSlice";

function ButtonContinueRecipe({id, page}) {
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (page === 'meals') {
      dispacth(fetchRecipeMealInProgress(id));
    } else if (page === 'drinks') {
      dispacth(fetchRecipeDrinkInProgress(id));
    }
    navigate(`/${page}/${id}/in-progress`);
  };

  return (
    <div className="container-btn-recipe">
      <button 
        type="button" 
        onClick={ handleClick }
        className="btn-go-recipe">Continuar</button>
    </div>
  );
}

export default ButtonContinueRecipe;
