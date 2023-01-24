import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSearchDrinksFirstLetter, fetchSearchDrinksIngredient, fetchSearchDrinksName } from "../feature/drinks/drinksSlice";
import { fetchSearchMealsFirstLetter, fetchSearchMealsIngredient, fetchSearchMealsName } from "../feature/meals/mealsSlice";

function Seach() {
  const dispacth = useDispatch();
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('name');
  const [showSearch, setShowSearch] = useState(false);

  const searchMeals = () => {
    if (filter === 'name') {
      dispacth(fetchSearchMealsName({search}));
    } else if (filter === 'ingredient') {
      dispacth(fetchSearchMealsIngredient({search}))
    } else if ( filter === 'firstLetter') {
      dispacth(fetchSearchMealsFirstLetter({search}))
    }
  };

  const searchDrinks = () => {
    if (filter === 'name') {
      dispacth(fetchSearchDrinksName({search}));
    } else if (filter === 'ingredient') {
      dispacth(fetchSearchDrinksIngredient({search}))
    } else if ( filter === 'firstLetter') {
      dispacth(fetchSearchDrinksFirstLetter({search}))
    }
  };

  const handleSearch = () => {
    if (location.pathname.includes("meals")) {
      searchMeals();
      setSearch('');
    } else if (location.pathname.includes("drinks")) {
      searchDrinks();
      setSearch('');
    }
  }

  return (
    <div>
      <form className="box-search">
        <label 
          htmlFor="input__search"
          className={showSearch ? 'label-search-show' : 'label-search' }>
          <input
            className="input-search"
            autoComplete="off"
            type="text"
            name="search"
            id="input__search"
            placeholder="Search"
            value={ search }
            onChange={ ({target}) => setSearch(target.value) }
            onClick={ () => setShowSearch(!showSearch) }
          />
        </label>
        { showSearch && (
          <div className="search-type">
            <div className="container-filter">
              <label htmlFor="radio__name">
                <input
                  className="radio_filter"
                  type="radio"
                  name="name"
                  id="radio__name" 
                  value="name"
                  checked={ filter === 'name' }
                  onChange={ ({target}) => setFilter(target.value) }
                />
                Name
              </label>
              <label htmlFor="radio__ingred">
                <input
                  className="radio_filter"
                  type="radio"
                  name="ingredient"
                  id="radio__ingred" 
                  value="ingredient"
                  checked={ filter === 'ingredient' }
                  onChange={ ({target}) => setFilter(target.value) }
                />
                Ingredients
              </label>
              <label htmlFor="radio__firstLetter">
                <input
                  className="radio_filter"
                  type="radio"
                  name="firstLetter"
                  id="radio__firstLetter" 
                  value="firstLetter"
                  checked={ filter === 'firstLetter' }
                  onChange={ ({target}) => setFilter(target.value) }
                />
                Por inicial
              </label>
            </div>
          <button type="button" className="btn-search" onClick={ handleSearch }>
            Search
          </button>
        </div>
        )}
      </form>
    </div>
  );
}

export default Seach;
