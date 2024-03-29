import React, { useEffect, useState } from "react";
import { MdOutlineFilterAlt, MdFilterAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchAllCategoryDrinks,
  fetchCategoryDrinks,
} from "../feature/drinks/drinksSlice";
import {
  fetchAllCategoryMeals,
  fetchCategoryMeals,
} from "../feature/meals/mealsSlice";

function Filter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [filterActive, setFilterActive] = useState(false);
  const [filter, setFilter] = useState([]);
  const mealsCategory = useSelector(
    (state) => state.meals.categoriesRecipeMeals
  );
  const drinksCategory = useSelector(
    (state) => state.drinks.categoriesRecipeDrinks
  );

  useEffect(() => {
    verifyFilterPage();
  }, [filterActive]);

  const verifyFilterPage = () => {
    if (location.pathname.includes("meals")) {
      dispatch(fetchAllCategoryMeals());
      setFilter(mealsCategory);
    } else if (location.pathname.includes("drinks")) {
      dispatch(fetchAllCategoryDrinks());
      setFilter(drinksCategory);
    }
  };

  const handleFilterCategory = ({ target }) => {
    const { id } = target;
    if (location.pathname.includes("meals")) {
      dispatch(fetchCategoryMeals(id));
    } else if (location.pathname.includes("drinks")) {
      dispatch(fetchCategoryDrinks(id));
    }
  };

  return (
    <div className="container-type-filter">
      {filterActive ? (
        <MdFilterAlt
          className="icon-filter"
          onClick={() => setFilterActive(!filterActive)}
        />
      ) : (
        <MdOutlineFilterAlt
          className="icon-filter"
          onClick={() => setFilterActive(!filterActive)}
        />
      )}
      {filterActive && (
        <div className="filters">
          {filter.map((category, index) => (
            <p
              key={index}
              className="category"
              id={category.strCategory}
              onClick={handleFilterCategory}
            >
              {category.strCategory}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
