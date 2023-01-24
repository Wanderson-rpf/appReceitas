import React, { useState } from "react";
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import {
  getDataLocalStorage,
  saveDataLocalStorage,
} from "../services/localStorage";

function ButtonFavorite({id, thumb, name, category, page, isFavorite}) {
  const [iconFavorite, setIconFavorite] = useState(isFavorite);
  const favoriteRecipe = getDataLocalStorage("favoriteRecipes");

  const addFavorite = () => {
    const newFavorite = {id, name, category, page, thumb}
    favoriteRecipe.push(newFavorite);
    saveDataLocalStorage("favoriteRecipes", favoriteRecipe);
    setIconFavorite(true);
  };

  const removeFavorite = () => {
    const arrayFavoriteRecipe = favoriteRecipe.filter(
      (recipe) => recipe.id !== id
    );
    saveDataLocalStorage("favoriteRecipes", arrayFavoriteRecipe);
    setIconFavorite(false);
  };

  const verifyFavorite = () => {
    const isFavorite = favoriteRecipe.some((recipe) => recipe.id === id);
    return isFavorite;
  };

  const handleFavorite = () => {
    if (verifyFavorite()) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  return (
    <div>
      <button type="button" onClick={handleFavorite}>
        {iconFavorite ? <HiHeart /> : <HiOutlineHeart />}
      </button>
    </div>
  );
}

export default ButtonFavorite;
