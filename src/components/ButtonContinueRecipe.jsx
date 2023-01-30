import React from "react";

function ButtonContinueRecipe() {

  const handleClick = () => {
    console.log('continue');
  };

  return (
    <div className="container-btn-recipe">
      <button 
        type="button" 
        onClick={ handleClick }
        className="btn-go-recipe">Continuar</button>
    </div>
  );
}

export default ButtonContinueRecipe;
