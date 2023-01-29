import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { saveRecipeDrinkInProgress } from "../feature/drinks/drinksSlice";
import { saveRecipeMealInProgress } from "../feature/meals/mealsSlice";
import { createObjRecipe } from "../helpers/FunctionsAssistants";

import {
  getDataLocalStorage,
  saveDataLocalStorage,
} from "../services/localStorage";

function ButtonStartRecipe({ recipe, page, idRecipe }) {
  const [started, setStarted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const inProgress = getDataLocalStorage("listAllRecipesInProgress");

  useEffect(() => {
    if (page === "meals") {
      const recipeStarted = inProgress.some(
        (element) => element.idMeal === recipe.idMeal
      );
      setStarted(recipeStarted);
    } else if (page === "drinks") {
      const recipeStarted = inProgress.some(
        (element) => element.idDrink === recipe.idDrink
      );
      setStarted(recipeStarted);
    }
  }, []);

  const handleStartRecipe = () => {
    if (page === "meals") {
      dispacth(saveRecipeMealInProgress(recipe));
    } else if (page === "drinks") {
      dispacth(saveRecipeDrinkInProgress(recipe));
    }
    if (started) {
      saveDataLocalStorage("recipeInProgress", [recipe]);
    } else {
      const newObj = createObjRecipe(page, recipe);
      inProgress.push(newObj);
      saveDataLocalStorage("listAllRecipesInProgress", inProgress);
      saveDataLocalStorage("recipeInProgress", [recipe]);
    }
    if (!JSON.parse(localStorage.getItem(idRecipe))) {
      localStorage.setItem(idRecipe, JSON.stringify([]));
    }
    navigate(`${location.pathname}/in-progress`);
  };

  return (
    <div className="container-btn-recipe">
      <button type="button" onClick={handleStartRecipe} className="btn-recipe">
        {!started ? (
          <p>
            Iniciar receita
            <HiPencilAlt />
          </p>
        ) : (
          <p>
            Continuar receita
            <HiPencilAlt />
          </p>
        )}
      </button>
    </div>
  );
}

export default ButtonStartRecipe;
