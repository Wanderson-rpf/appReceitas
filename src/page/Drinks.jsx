import React from "react";
import { ImGlass2 } from 'react-icons/im';
import Filter from "../components/Filter";
import Header from "../components/Header";
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
    </div>
  );
}

export default Drinks;
