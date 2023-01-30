import React from "react";
import ButtonContinueRecipe from "../components/ButtonContinueRecipe";
import ButtonDeleteRecipeInProgress from "../components/ButtonDeleteRecipeInProgress";
import ButtonPageUp from "../components/ButtonPageUp";
import Header from "../components/Header";
import Title from "../components/Title";
import { getDataLocalStorage } from "../services/localStorage";

function RecipeInProgressList() {
  const listRecipesInProgress = getDataLocalStorage('listAllRecipesInProgress');

  return(
    <div>
      <Header />
      <Title title={ 'Receitas iniciadas' } />
      <div className="container-recipe-favorite">
        { listRecipesInProgress.map((recipe, index) => (
          <div key={index} className="container-favorite-info">
            <div className="container-descriptions-favorite">
              <div>
                <img src={recipe.thumb} alt="" className="thumb-favorite" />
              </div>
              <div className="box-descriptions-favorite">
                <p className="title-favorite">{recipe.name}</p>
                <p>{recipe.category}</p>
                <div className="container-options">
                  <ButtonContinueRecipe />
                  <ButtonDeleteRecipeInProgress id={ recipe.id }/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ButtonPageUp />
    </div>
  );
}

export default RecipeInProgressList;
