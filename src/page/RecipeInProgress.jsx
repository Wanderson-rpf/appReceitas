import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import ButtonDoneRecipe from "../components/ButtonDoneRecipe";
import ButtonFavorite from "../components/ButtonFavorite";
import ButtonShared from "../components/ButtonShared";
import Header from "../components/Header";
import { fetchRecipeDrinkInProgress } from "../feature/drinks/drinksSlice";
import { fetchRecipeMealInProgress } from "../feature/meals/mealsSlice";
import { listIngredients } from "../helpers/FunctionsAssistants";
import { getDataLocalStorage, saveDataLocalStorage } from "../services/localStorage";

function RecipeInProgress() {
  const dispacth = useDispatch();
  const location = useLocation();
  const mealsOrDrinkId = useParams(":id");
  const { id } = mealsOrDrinkId;
  const mealsRecipe = useSelector((state) => state.meals.recipeInProgress);
  const drinksRecipe = useSelector((state) => state.drinks.recipeInProgress);
  const [isMeal, setIsMeal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [ckeckListIngredients, setCkeckListIngredients] = useState([]);

  useEffect(() => {
    if (location.pathname.includes('meals')) {
      dispacth(fetchRecipeMealInProgress(id));
      setIsMeal(true);
    } else if (location.pathname.includes('drinks')) {
      dispacth(fetchRecipeDrinkInProgress(id));
      setIsMeal(false);
    }
    const checkListSalved = getDataLocalStorage(id);
    setCkeckListIngredients(checkListSalved);
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

  const ingredientsList = listIngredients(verifyTypeRecipe());

  const saveProgressCheckIngredients = ({ target }) => {
    const { name, checked } = target;
    if (checked) {
      setCkeckListIngredients([...ckeckListIngredients, name]);
    } else {
      const removingItem = ckeckListIngredients.filter((item) => item !== name);
      setCkeckListIngredients([...removingItem]);
    }
  };

  useEffect(() => {
    ingredientsList.length === ckeckListIngredients.length ? setIsDisabled(false) : setIsDisabled(true)
    saveDataLocalStorage(id, ckeckListIngredients);
  }, [ckeckListIngredients]);

  return (
    <div>
      <Header />
      {verifyTypeRecipe().map((recipe) => (
        <div key={id} className="container-details">
          <div>
            <img
              src={isMeal ? recipe.strMealThumb : recipe.strDrinkThumb}
              alt="thumb recipe"
              className="thumb-details"
            />
          </div>
          <div className="box-info-details">
            <div className="box-info">
              <h1 className="title">{isMeal ? recipe.strMeal : recipe.strDrink}</h1>
              <p className="category-details">{ isMeal ? recipe.strCategory : recipe.strAlcoholic }</p>
            </div>
            <div className="container-buttons">
              <ButtonShared />
              <ButtonFavorite 
                id={ isMeal ? recipe.idMeal : recipe.idDrink }
                thumb={ isMeal ? recipe.strMealThumb : recipe.strDrinkThumb }
                page={ isMeal ? 'meals' : 'drinks' }
                name={ isMeal ? recipe.strMeal : recipe.strDrink }
                category={ recipe.strCategory }
                isFavorite={ false }
              />
            </div>
          </div>
          <div className="container-descriptions">
            <h2 className="title">Ingredientes</h2>
            <div className="box-descriptions">
              {ingredientsList.map((ingredient, index) => (
                <ul key={index}>
                  <li className="item-list">
                    <label htmlFor={ `ingredient-${index}` }>
                      <input 
                        type="checkbox" 
                        id={ `ingredient-${index}` } 
                        name={ ingredient } 
                        onChange={ saveProgressCheckIngredients }
                        checked={ ckeckListIngredients.includes(ingredient) }
                      />
                      {ingredient}
                    </label>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="container-descriptions">
            <h2 className="title">Instruções</h2>
            <p className="box-descriptions">{recipe.strInstructions}</p>
          </div>
          <div className="container-video">
            {isMeal && (
              <iframe
                width="96%"
                height="315"
                title="video-recipe"
                src={`https://www.youtube.com/embed/${recipe.strYoutube
                  .split("=")
                  .pop()}`}
              />
            )}
          </div>
        </div>
      ))}
      <ButtonDoneRecipe 
        id={ id }
        isDisabled={ isDisabled } 
        recipe={ isMeal ? mealsRecipe : drinksRecipe }
        page={ isMeal ? 'meals' : 'drinks' }
      />
    </div>
  );
}

export default RecipeInProgress;
