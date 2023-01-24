import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import ButtonFavorite from "../components/ButtonFavorite";
import ButtonShared from "../components/ButtonShared";
import ButtonStartRecipe from "../components/ButtonStartRecipe";
import CarouselRecommendations from "../components/CarouselRecommendations";
import Header from "../components/Header";
import { fetchSelectedDrink } from "../feature/drinks/drinksSlice";
import { fetchSelectedMeal } from "../feature/meals/mealsSlice";
import { listIngredients, listMeasure } from "../helpers/FunctionsAssistants";

function RecipeDetail() {
  const dispacth = useDispatch();
  const location = useLocation();
  const mealsOrDrinkId = useParams(":id");
  const { id } = mealsOrDrinkId;
  const mealsRecipe = useSelector((state) => state.meals.meal);
  const drinksRecipe = useSelector((state) => state.drinks.drink);
  const [isMeal, setIsMeal] = useState(false);

  useEffect(() => {
    if (location.pathname === `/meals/${id}`) {
      dispacth(fetchSelectedMeal(id));
      setIsMeal(true);
    } else if (location.pathname === `/drinks/${id}`) {
      dispacth(fetchSelectedDrink(id));
      setIsMeal(false);
    } else {
      console.log("Pagina não encontrada.");
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

  const ingredientsList = listIngredients(verifyTypeRecipe());
  const measureList = listMeasure(verifyTypeRecipe());

  return (
    <div>
      <Header />
      {verifyTypeRecipe().map((recipe) => (
        <div key={id}>
          <div>
            <img
              src={isMeal ? recipe.strMealThumb : recipe.strDrinkThumb}
              alt="thumb recipe"
            />
          </div>
          <div>
            <h1>{isMeal ? recipe.strMeal : recipe.strDrink}</h1>
            <p>{recipe.strCategory}</p>
            {!isMeal && <p>{recipe.strAlcoholic}</p>}
          </div>
          <div>
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
          <div>
            <h2>Ingredientes</h2>
            {ingredientsList.map((ingredient, index) => (
              <ul key={index}>
                <li>{`${measureList[index]} - ${ingredient}`}</li>
              </ul>
            ))}
          </div>
          <div>
            <h2>Instruções</h2>
            {recipe.strInstructions}
          </div>
          <div>
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
          <div>
            <ButtonStartRecipe />
          </div>
          <div>
            <h2>Recomendações</h2>
            <CarouselRecommendations />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeDetail;
