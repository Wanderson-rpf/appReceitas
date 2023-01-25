import React from "react";

function FilterFavorites() {
  return (
    <div>
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
    </div>
  );
}

export default FilterFavorites;
