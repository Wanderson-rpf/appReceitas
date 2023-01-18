import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import CarouselRecommendations from "../components/CarouselRecommendations";
import Header from "../components/Header";
import { fetchSelectedDrink } from "../feature/drinks/drinksSlice";
import { fetchSelectedMeal } from "../feature/meals/mealsSlice";

function RecipeDetail() {
  const dispacth = useDispatch();
  const location = useLocation();
  const mealsOrDrinkId = useParams(':id');
  const { id } = mealsOrDrinkId;
  const mealsRecipe = useSelector((state) => state.meals.meals);
  const drinksRecipe = useSelector((state) => state.drinks.drinks);
  const [recipeSelected, setRecipeSelected] = useState([]);
  const [isMeal, setIsMeal] = useState(false);

  useEffect(() => {
    if (location.pathname === `/meals/${id}`) {
      dispacth(fetchSelectedMeal(id));
      setRecipeSelected(mealsRecipe);
      setIsMeal(true);
    } else if (location.pathname === `/drinks/${id}`) {
      dispacth(fetchSelectedDrink(id));
      setRecipeSelected(drinksRecipe);
      setIsMeal(false);
    } else {
      console.log('Pagina não encontrada.');
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

  const ingredientsList = verifyTypeRecipe().map((element) => Object.entries(element)
  .filter((elem) => elem[0].includes('strIngredient')
  && elem[1] !== ''
  && elem[1] !== ' '
  && elem[1] !== null)
  .map((ingredients) => ingredients[1])).flat();

const measureList = verifyTypeRecipe().map((element) => Object.entries(element)
  .filter((elem) => elem[0].includes('strMeasure')
  && elem[1] !== ''
  && elem[1] !== ' '
  && elem[1] !== null)
  .map((ingredients) => ingredients[1])).flat();

  return (
    <div>
      <Header />
      { verifyTypeRecipe().map((recipe) => (
        <div key={id}>
          <div>
            <img src={ isMeal ? recipe.strMealThumb : recipe.strDrinkThumb } alt="thumb recipe" />
          </div>
          <div>
            <h1>{ isMeal ? recipe.strMeal : recipe.strDrink }</h1>
            <p>{ recipe.strCategory }</p>
            { !isMeal && (<p>{ recipe.strAlcoholic }</p>) }
          </div>
          <div>
            <h2>Ingredientes</h2>
            { ingredientsList.map((ingredient, index) => (
              <ul key={index}>
                <li>{`${ingredient} - ${measureList[index]}`}</li>
              </ul>
            ))}
          </div>
          <div>
              <h2>Instruções</h2>
              { recipe.strInstructions }
          </div>
          <div>
            {isMeal && <iframe
              width="96%"
              height="315"
              title="video-recipe"
              src={ `https://www.youtube.com/embed/${recipe.strYoutube.split('=').pop()}` }
            />
            }
          </div>
          <div>
            <h2>Outras Receitas</h2>
            <CarouselRecommendations />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeDetail;
