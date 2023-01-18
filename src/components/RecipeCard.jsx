import React from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe, page}) {
  const navigate = useNavigate();

  const thumbRecipe = () => {
    let strName;
    if (page === "/meals") {
      strName = "strMealThumb";
    } else if (page === "/drinks") {
      strName = "strDrinkThumb";
    }
    return strName;
  };

  const strNameRecipe = () => {
    let strName;
    if (page === "/meals") {
      strName = "strMeal";
    } else if (page === "/drinks") {
      strName = "strDrink";
    }
    return strName;
  };

  const idVerify = () => {
    let id;
    if (page === '/meals') {
      id = 'idMeal';
    } else if (page === "/drinks")  {
      id = 'idDrink';
    }
    return id;
  };

  return (
    <div>
      <div className="container-item-recipe">
          <div
            id={ page==="meals" ? recipe.idMeal : recipe.idDrink }
            className="box-recipe"
          >
            <img
              src={recipe[thumbRecipe()]}
              alt={recipe[strNameRecipe()]}
              className="thumb-recipe"
            />
            <div className="box-info-recipe">
              <p className="name-recipe">{recipe[strNameRecipe()]}</p>
              <p className="category-recipe">{recipe.strCategory}</p>
              <button
                type="button"
                onClick={ () => navigate(`${page}/${recipe[idVerify()]}`) }
                className="btn-go-recipe"
              >
                Ir para Receita
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default RecipeCard;
