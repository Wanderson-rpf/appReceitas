import React, { useEffect, useState } from "react";
import { MdFastfood } from 'react-icons/md';
import { GiHotMeal } from "react-icons/gi";
import { ImGlass2 } from 'react-icons/im';
import Header from "../components/Header";
import { getDataLocalStorage } from "../services/localStorage";
import { Link } from "react-router-dom";
import ButtonShared from "../components/ButtonShared";
import ButtonFavorite from "../components/ButtonFavorite";
import Title from "../components/Title";
import ButtonPageUp from "../components/ButtonPageUp";

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
      (favoriteRecipe) => favoriteRecipe.page === "meals"
    );
    setFavoriteRecipes(filtredMealsFavorite);
  };

  const handleFilterDrinks = () => {
    setFavoriteRecipes(allFavoriteRecipes);
    const filtredDrinksFavorite = favoriteRecipes.filter(
      (favoriteRecipe) => favoriteRecipe.page === "drinks"
    );
    setFavoriteRecipes(filtredDrinksFavorite);
  };

  return (
    <div>
      <Header />
      <Title title={ 'Receitas Favoritas' } />
      <div className="container-filter-favorites">
        <button
          type="button"
          onClick={() => setFavoriteRecipes(allFavoriteRecipes)}
        >
          <MdFastfood className="icon-filter" />
        </button>
        <button type="button" onClick={handleFilterMeals}>
          <GiHotMeal className="icon-filter" />
        </button>
        <button type="button" onClick={handleFilterDrinks}>
          <ImGlass2 className="icon-filter" />
        </button>
      </div>
      <div className="container-recipe-favorite">
        {favoriteRecipes.map((recipeFav, index) => (
          <div key={index} className="container-favorite-info">
            <div className="container-descriptions-favorite">
              <Link
                to={
                  recipeFav.page === "meals"
                    ? `/meals/${recipeFav.id}`
                    : `/drinks/${recipeFav.id}`
                }
              >
                <img 
                  src={recipeFav.thumb} 
                  alt="favorite.thumb" 
                  className="thumb-favorite" />
              </Link>
              <div className="box-descriptions-favorite">
                <Link
                  to={
                    recipeFav.page === "meals"
                      ? `/meals/${recipeFav.id}`
                      : `/drinks/${recipeFav.id}`
                  }
                >
                  <p className="title-favorite">{recipeFav.name}</p>
                </Link>
                <p>{recipeFav.category}</p>
                <div className="container-buttons">
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
      <ButtonPageUp />
    </div>
  );
}

export default Favorites;
