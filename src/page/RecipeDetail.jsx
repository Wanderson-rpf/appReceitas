import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

function RecipeDetail() {
  const location = useLocation();
  const mealsRecipe = useSelector((state) => state.meals.meals);
  const drinksRecipe = useSelector((state) => state.drinks.drinks);
  const [recipeSelected, setRecipeSelected] = useState([]);
  const [page, setPage] = useState('');

  useEffect(() => {
    if (location.pathname.includes('meals')) {
      setRecipeSelected(mealsRecipe);
      setPage('meals');
    } else if (location.pathname.includes('drinks')) {
      setRecipeSelected(drinksRecipe);
      setPage('drinks');
    } else {
      console.log('Pagina não encontrada.');
    }
  }, []);

  const verifyId = () => {
    let idRecipe;
    if (location.pathname.includes('meals')) {
      idRecipe = recipeSelected[0].idMeal;
    } else if (location.pathname.includes('drinks')) {
      idRecipe = recipeSelected[0].idDrink;
    }
    return idRecipe;
  };

  console.log(recipeSelected);

  return (
    <div>
      <Header />
      { recipeSelected.map((recipe) => (
        <div key={verifyId}>
          <img src={ page==='meals' ? recipe.strMealThumb : recipe.strDrinkThumb } alt="thumb recipe" />
        </div>
      ))}
    </div>
  );
}

export default RecipeDetail;
