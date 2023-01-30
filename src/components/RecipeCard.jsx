import React from "react";
import { useNavigate } from "react-router-dom";
import { idVerify, strNameRecipe, thumbRecipe } from "../helpers/FunctionsAssistants";

function RecipeCard({ recipe, page}) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container-item-recipe">
          <div
            id={ page==="meals" ? recipe.idMeal : recipe.idDrink }
            className="box-recipe"
          >
            <img
              src={recipe[thumbRecipe(page)]}
              alt={recipe[strNameRecipe(page)]}
              className="thumb-recipe"
            />
            <div className="box-info-recipe">
              <p className="name-recipe">{recipe[strNameRecipe(page)]}</p>
              <p className="category-recipe">{recipe.strCategory}</p>
              <button
                type="button"
                onClick={ () => navigate(`${page}/${recipe[idVerify(page)]}`) }
                className="btn-go-recipe"
              >
                Abrir Receita
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default RecipeCard;
