import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipesMeals } from "../feature/meals/mealsSlice";

function Recipes() {
  const dispacth = useDispatch();
  const recipeMeals = useSelector((state) => state.meals.recipeMeals);
  
  useEffect(() => {
    dispacth(fetchRecipesMeals());
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      {recipeMeals.map((recipe, index) => (
        <div key={index}>
          <p>{recipe.strMeals}</p>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
