import React from "react";
import { ImGlass2 } from 'react-icons/im';
import ButtonPageUp from "../components/ButtonPageUp";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Recipes from "../components/Recipes";
import Seach from "../components/Seach";

function Drinks() {
  return (
    <div>
      <Header />
      <div className="container-title">
        <div className="box-title">
          <ImGlass2 />
          <h1>Bebidas</h1>
          <ImGlass2 />
        </div>
      </div>
      <Seach />
      <Filter />
      <Recipes />
      <ButtonPageUp />
    </div>
  );
}

export default Drinks;