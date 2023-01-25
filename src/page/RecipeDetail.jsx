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
                  <li className="item-list">{`${measureList[index]} - ${ingredient}`}</li>
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
          <div className="container-carosel">
            <h2 className="title">Recomendações</h2>
            <CarouselRecommendations />
          </div>
          <div className="container-btn-start-recipe">
            <ButtonStartRecipe />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeDetail;
