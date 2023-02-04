import React, { useEffect, useState } from "react";
import ButtonContinueRecipe from "../components/ButtonContinueRecipe";
import ButtonDeleteRecipeInProgress from "../components/ButtonDeleteRecipeInProgress";
import ButtonPageUp from "../components/ButtonPageUp";
import Header from "../components/Header";
import Title from "../components/Title";
import { getDataLocalStorage, removeDataLocalStorage, saveDataLocalStorage } from "../services/localStorage";

function RecipeInProgressList() {
  const [listInProgress, setListInProgress] = useState([]);

  useEffect(() => {
    const listRecipesInProgress = getDataLocalStorage('listAllRecipesInProgress');
    setListInProgress(listRecipesInProgress);
  });

  const attListInProgress = () => {
    const listRecipesInProgress = getDataLocalStorage('listAllRecipesInProgress');
    setListInProgress(listRecipesInProgress);
  };


  return(
    <div>
      <Header />
      <Title title={ 'Receitas iniciadas' } />
      <div className="container-recipe-favorite">
        { listInProgress.map((recipe, index) => (
          <div key={index} className="container-favorite-info">
            <div className="container-descriptions-favorite">
              <div>
                <img src={recipe.thumb} alt="" className="thumb-favorite" />
              </div>
              <div className="box-descriptions-favorite">
                <p className="name-recipe">{recipe.name}</p>
                <div className="container-options">
                  <ButtonContinueRecipe />
                  <ButtonDeleteRecipeInProgress 
                    id={ recipe.id }
                    func={ attListInProgress }
                  />
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
