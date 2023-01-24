import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getDataLocalStorage } from "../services/localStorage";
import { Link } from "react-router-dom";
import ButtonShared from "../components/ButtonShared";
import ButtonFavorite from "../components/ButtonFavorite";
import Title from "../components/Title";

function Favorites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [allFavoriteRecipes, setAllFavoriteRecipes] = useState([]);

  useEffect(() => {
    const newFavoriteRecipes = getDataLocalStorage("favoriteRecipes");
    setFavoriteRecipes(newFavoriteRecipes);
    setAllFavoriteRecipes(newFavoriteRecipes);
  }, []);

  const handleFilterMeals = () => {
    setFavoriteRecipes(allFavoriteRecipes);
    const filtredMealsFavorite = favoriteRecipes.filter(
      (favoriteRecipe) => favoriteRecipe.type === "meal"
    );
    setFavoriteRecipes(filtredMealsFavorite);
  };

  const handleFilterDrinks = () => {
    setFavoriteRecipes(allFavoriteRecipes);
    const filtredDrinksFavorite = favoriteRecipes.filter(
      (favoriteRecipe) => favoriteRecipe.type === "drink"
    );
    setFavoriteRecipes(filtredDrinksFavorite);
  };

  return (
    <div>
      <Header />
      <Title title={ 'Receitas Favoritas' } />
      <div>
        <button
          type="button"
          onClick={() => setFavoriteRecipes(allFavoriteRecipes)}
        >
          Todos
        </button>
        <button type="button" onClick={handleFilterMeals}>
          Pratos
        </button>
        <button type="button" onClick={handleFilterDrinks}>
          Bebidas
        </button>
      </div>
      <div>
        {favoriteRecipes.map((recipeFav, index) => (
          <div key={index}>
            <div>
              <Link
                to={
                  recipeFav.type === "meal"
                    ? `/meals/${recipeFav.id}`
                    : `/drinks/${recipeFav.id}`
                }
              >
                <img src={recipeFav.thumb} alt="favorite.thumb" />
              </Link>
              <div>
                <Link
                  to={
                    recipeFav.type === "meal"
                      ? `/meals/${recipeFav.id}`
                      : `/drinks/${recipeFav.id}`
                  }
                >
                  <p>{recipeFav.name}</p>
                </Link>
                <p>{recipeFav.category}</p>
                <div>
                  <ButtonShared />
                  <ButtonFavorite 
                    id={recipeFav.id}
                    thumb={ recipeFav.thumb }
                    name={ recipeFav.name }
                    category={ recipeFav.category }
                    isFavorite={ true } />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
