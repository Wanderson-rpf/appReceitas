import React from "react";
import { GiHotMeal } from "react-icons/gi";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Recipes from "../components/Recipes";
import Seach from "../components/Seach";

function Meals() {
  return (
    <div className="container-meals">
      <Header />
      <div className="container-title">
        <div className="box-title">
          <GiHotMeal />
          <h1>Pratos</h1>
          <GiHotMeal />
        </div>
      </div>
      <Seach />
      <Filter />
      <Recipes />
    </div>
  );
}

export default Meals;
