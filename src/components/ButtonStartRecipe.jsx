import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ButtonStartRecipe() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleStartRecipe = () => {
    navigate(`${location.pathname}/in-progress`);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleStartRecipe}
      >
        Iniciar receita
      </button>
    </div>
  )
}

export default ButtonStartRecipe;
