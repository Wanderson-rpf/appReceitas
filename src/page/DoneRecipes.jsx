import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Title from "../components/Title";
import { useLocalStorage } from "../helpers/hooks/useLocalStorage";

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useLocalStorage('doneRecipes', []);

  return (
    <div>
      <Header />
      <Title title={ 'Receitas concluídas' } />
      <div>
        { doneRecipes.map((recipe, index) => (
          <div key={index} className="container-favorite-info">
            <div  className="container-descriptions-favorite">
              <Link
                to={
                  recipe.page === "meals"
                    ? `/meals/${recipe.id}`
                    : `/drinks/${recipe.id}`
                }
              >
                <img 
                  src={ recipe.thumb }
                  alt="thumb-done-recipe"
                  className="thumb-favorite"
                />
              </Link>
              <div className="box-descriptions-favorite">
                <Link
                  to={
                    recipe.page === "meals"
                      ? `/meals/${recipe.id}`
                      : `/drinks/${recipe.id}`
                  }
                >
                  <p className="name-recipe">{ recipe.name }</p>
                </Link>
                <p>{recipe.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoneRecipes;
