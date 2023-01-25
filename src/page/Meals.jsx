import React from "react";
import ButtonPageUp from "../components/ButtonPageUp";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Recipes from "../components/Recipes";
import Seach from "../components/Seach";
import Title from "../components/Title";

function Meals() {
  return (
    <div className="container-meals">
      <Header />
      <Title title={ 'Pratos' } />
      <Seach />
      <Filter />
      <Recipes />
      <ButtonPageUp />
    </div>
  );
}

export default Meals;
