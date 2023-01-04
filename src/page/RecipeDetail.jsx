import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

function RecipeDetail() {
  const location = useLocation();
  const mealsRecipe = useSelector((state) => state.meals.meals);
  const drinksRecipe = useSelector((state) => state.drinks.drinks);
  const [recipeSelected, setRecipeSelected] = useState([]);
  const [isMeal, setIsMeal] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('meals')) {
      setRecipeSelected(mealsRecipe);
      setIsMeal(true);
    } else if (location.pathname.includes('drinks')) {
      setRecipeSelected(drinksRecipe);
      setIsMeal(false);
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

  const ingredientsList = recipeSelected.map((element) => Object.entries(element)
  .filter((elem) => elem[0].includes('strIngredient')
  && elem[1] !== ''
  && elem[1] !== ' '
  && elem[1] !== null)
  .map((ingredients) => ingredients[1])).flat();

const measureList = recipeSelected.map((element) => Object.entries(element)
  .filter((elem) => elem[0].includes('strMeasure')
  && elem[1] !== ''
  && elem[1] !== ' '
  && elem[1] !== null)
  .map((ingredients) => ingredients[1])).flat();

  return (
    <div>
      <Header />
      { recipeSelected.map((recipe) => (
        <div key={verifyId}>
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
            <h2>Recomenações de acompanhamentos</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeDetail;
