import React from "react";
import { HiPencilAlt } from 'react-icons/hi';
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
        className="btn-start-recipe"
      >
        Iniciar receita<HiPencilAlt />
      </button>
    </div>
  )
}

export default ButtonStartRecipe;
