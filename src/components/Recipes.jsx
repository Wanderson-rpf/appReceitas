import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchRecipesDrinks, selectDrinksRecipe } from "../feature/drinks/drinksSlice";
import { fetchRecipesMeals, selectMealsRecipe } from "../feature/meals/mealsSlice";

function Recipes() {
  const dispacth = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState('');
  const mealsRecipe = useSelector((state) => state.meals.recipeMeals);
  const drinksRecipe = useSelector((state) => state.drinks.recipeDrinks);

  useEffect(() => {
    if (location.pathname.includes("meals")) {
      dispacth(fetchRecipesMeals());
      setPage("meals");
    } else if (location.pathname.includes("drinks")) {
      dispacth(fetchRecipesDrinks());
      setPage("drinks");
    }
  }, []);

  const verifyTypeRecipe = () => {
    let recipes;
    if (location.pathname.includes("meals")) {
      recipes = mealsRecipe;
    } else if (location.pathname.includes("drinks")) {
      recipes = drinksRecipe;
    }
    return recipes;
  };

  const thumbRecipe = () => {
    let strName;
    if (page === "meals") {
      strName = "strMealThumb";
    } else if (page === "drinks") {
      strName = "strDrinkThumb";
    }
    return strName;
  };

  const strNameRecipe = () => {
    let strName;
    if (page === "meals") {
      strName = "strMeal";
    } else if (page === "drinks") {
      strName = "strDrink";
    }
    return strName;
  };

  const handleOpenRecipe = (id) => {
    if (page==="meals") {
      const recipeSelected = mealsRecipe.filter((element) => element.idMeal === id);
      dispacth(selectMealsRecipe(recipeSelected));
      navigate(`/${page}/${id}`)
    } else if (page==="drinks") {
      const recipeSelected = drinksRecipe.filter((element) => element.idDrink === id);
      dispacth(selectDrinksRecipe(recipeSelected));
      navigate(`/${page}/${id}`)
    }
  };

  return (
    <div className="container-recipe">
      {verifyTypeRecipe().map((recipe, index) => (
        <div key={index} className="container-item-recipe">
          <div
            id={ page==="meals" ? recipe.idMeal : recipe.idDrink }
            className="box-recipe"
          >
            <img
              src={recipe[thumbRecipe()]}
              alt="recipe"
              className="thumb-recipe"
            />
            <div className="box-info-recipe">
              <p className="name-recipe">{recipe[strNameRecipe()]}</p>
              <p className="category-recipe">{recipe.strCategory}</p>
              <button
                type="button"
                onClick={ () => handleOpenRecipe(page==="meals" ? recipe.idMeal : recipe.idDrink) }
                className="btn-go-recipe"
              >
                Ir para Receita
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
