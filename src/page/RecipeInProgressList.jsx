import React from "react";
import ButtonPageUp from "../components/ButtonPageUp";
import Header from "../components/Header";
import Title from "../components/Title";

function RecipeInProgressList() {
  return(
    <div>
      <Header />
      <Title title={ 'Receitas em andamento' } />
      <ButtonPageUp />
    </div>
  );
}

export default RecipeInProgressList;
