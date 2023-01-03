import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";

function RecipeDetail() {
  const mealsRecipe = useSelector((state) => state.meals.recipeMeals);
  const drinksRecipe = useSelector((state) => state.drinks.recipeDrinks);

  return (
    <div>
      <Header />
      <h1>RecipeDetail</h1>
    </div>
  );
}

export default RecipeDetail;
