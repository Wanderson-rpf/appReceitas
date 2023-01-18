import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchRecipesDrinks } from "../feature/drinks/drinksSlice";
import { fetchRecipesMeals } from "../feature/meals/mealsSlice";
import RecipeCard from "./RecipeCard";

function Recipes() {
  const dispacth = useDispatch();
  const location = useLocation();
  const mealsRecipe = useSelector((state) => state.meals.recipeMeals);
  const drinksRecipe = useSelector((state) => state.drinks.recipeDrinks);

  useEffect(() => {
    dispacth(fetchRecipesMeals());
    dispacth(fetchRecipesDrinks());
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

  return (
    <div className="container-recipe">
      {verifyTypeRecipe().map((recipe, index) => (
        <RecipeCard 
          key={index}
          recipe={recipe}
          page={ location.pathname }
        />
      ))}
    </div>
  );
}

export default Recipes;
