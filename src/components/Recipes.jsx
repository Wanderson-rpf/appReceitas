import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchRecipesDrinks } from "../feature/drinks/drinksSlice";
import { fetchRecipesMeals } from "../feature/meals/mealsSlice";

function Recipes() {
  const dispacth = useDispatch();
  const location = useLocation();
  const [page, setPage] = useState('');
  const mealsRecipe = useSelector((state) => state.meals.recipeMeals);
  const drinksRecipe = useSelector((state) => state.drinks.recipeDrinks);
  
  useEffect(() => {
    if (location.pathname.includes("meals")) {
      dispacth(fetchRecipesMeals());
      setPage('meals');
    } else if (location.pathname.includes("drinks")) {
      dispacth(fetchRecipesDrinks());
      setPage('drinks');
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
    if (page === 'meals') {
      strName = 'strMealThumb';
    } else if (page === 'drinks') {
      strName = 'strDrinkThumb';
    }
    return strName;
  };

  const strNameRecipe = () => {
    let strName;
    if (page === 'meals') {
      strName = 'strMeal';
    } else if (page === 'drinks') {
      strName = 'strDrink';
    }
    return strName;
  };

  const idRecipe = () => {
    let strName;
    if (page === 'meals') {
      strName = 'idMeal';
    } else if (page === 'drinks') {
      strName = 'idDrink';
    }
    return strName;
  };

  return (
    <div className="container-recipe">
      { verifyTypeRecipe().map((recipe, index) => (
        <div key={index} className="container-item-recipe">
          <div className="box-recipe">
            <img src={recipe[thumbRecipe()]} alt="recipe" className="thumb-recipe" />
            <div className="box-info-recipe">
              <p>{recipe[strNameRecipe()]}</p>
              <div>buttons</div>
              <p>{recipe[idRecipe()]}</p>
            </div>
          </div>
        </div>
      )) }
    </div>
  );
}

export default Recipes;
