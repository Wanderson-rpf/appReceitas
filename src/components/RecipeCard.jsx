import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMealsRecipe } from "../feature/meals/mealsSlice";
import { selectDrinksRecipe } from "../feature/drinks/drinksSlice";

function RecipeCard({ recipe, page}) {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const mealsRecipe = useSelector((state) => state.meals.recipeMeals);
  const drinksRecipe = useSelector((state) => state.drinks.recipeDrinks);

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

  const handleOpenRecipe = (id) => {
    if (page==="/meals") {
      const recipeSelected = mealsRecipe.filter((element) => element.idMeal === id);
      dispacth(selectMealsRecipe(recipeSelected));
      navigate(`${page}/${id}`)
    } else if (page==="/drinks") {
      const recipeSelected = drinksRecipe.filter((element) => element.idDrink === id);
      dispacth(selectDrinksRecipe(recipeSelected));
      navigate(`${page}/${id}`)
    }
  };

  // console.log('Pagina', page);
  // console.log(recipe);
  // console.log(recipe[idVerify()]);
  // console.log(recipe[thumbRecipe()]);
  // console.log(recipe[strNameRecipe()]);

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
                onClick={ () => handleOpenRecipe(recipe[idVerify()]) }
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
