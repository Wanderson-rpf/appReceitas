import React, { useState } from "react";
import { useEffect } from "react";
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { useLocalStorage } from "../helpers/hooks/useLocalStorage";

function ButtonFavorite({id, thumb, name, category, page, isFavorite, func}) {
  const [iconFavorite, setIconFavorite] = useState(isFavorite);
  const [favorite, setFavorite] = useLocalStorage('favoriteRecipes', []);

  const addFavorite = () => {
    const newFavorite = {id, name, category, page, thumb}
    setFavorite([...favorite, newFavorite]);
    setIconFavorite(true);
  };

  const removeFavorite = () => {
    const arrayFavoriteRecipe = favorite.filter(
      (recipe) => recipe.id !== id
    );
    setFavorite(arrayFavoriteRecipe);
    setIconFavorite(false);
    func();
  };

  const verifyFavorite = () => {
    const isFavorite = favorite.some((recipe) => recipe.id === id);
    return isFavorite;
  };

  useEffect(() => {
    setIconFavorite(verifyFavorite());
  });

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
        { iconFavorite 
          ? <HiHeart className="icon-favorite" /> 
          : <HiOutlineHeart className="icon-favorite" />}
      </button>
    </div>
  );
}

export default ButtonFavorite;
