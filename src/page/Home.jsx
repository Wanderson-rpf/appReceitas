import React from "react";
import { useNavigate } from "react-router-dom";
import logoPrincipal from "../img/logo_principal_branca.png";

function Home() {
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/register");
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <div className="login-container">
      <img src={logoPrincipal} alt="logo branca" />
      <div className="container-intro">
        <p className="text-intro">
          Cadastre-se para ter uma experiencia mais personalizada, salvando suas
          receitas favoritas em seu perfil.
        </p>
        <p className="text-intro">
          Caso já tenha cadastro, clique em login.
        </p>
      </div>
      <div className="container-buttons">
        <button
          className="btn-home"
          type="button"
          onClick={handleClickRegister}
        >
          Register
        </button>
        <button className="btn-home" type="button" onClick={handleClickLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
