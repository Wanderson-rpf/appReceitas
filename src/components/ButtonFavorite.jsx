import React, { useState } from "react";
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import {
  getDataLocalStorage,
  saveDataLocalStorage,
} from "../services/localStorage";

function ButtonFavorite({id, thumb, name, category, page}) {
  console.log(id);
  console.log(thumb);
  console.log(name);
  console.log(category);
  console.log(page);

  const [iconFavorite, setIconFavorite] = useState(false);
  const favoriteRecipe = getDataLocalStorage("favoriteRecipes");

  const verifyFavorite = () => {
    const isFavorite = favoriteRecipe.some((recipe) => recipe.id === id);
    return isFavorite;
  };

  const addFavorite = () => {
    const newFavorite = {id, name, category, page, thumb}
    favoriteRecipe.push(newFavorite);
    console.log(newFavorite);
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
