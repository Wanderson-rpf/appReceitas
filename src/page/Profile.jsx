import React from "react";
import { FaRegUserCircle } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Title from "../components/Title";

function Profile() {
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.login);

  return (
    <div>
      <Header />
      <Title title={ 'Dados do Usuário' } />
      <div className="container-user">
        <FaRegUserCircle className="icon-user" />
        <p className="email-logged">{ userLogged.email }</p>
      </div>
      <div className="container-user">
        <button 
          type="button" 
          onClick={ () => navigate("/favorite") }
          className="btn-go-recipe btn-profile">
          Suas receitas favoritas
        </button>
        <button 
          type="button" 
          onClick={ () => navigate("/done-recipes") }
          className="btn-go-recipe btn-profile">
          Suas receitas concluídas
        </button>
        <button 
          type="button" 
          onClick={ () => navigate("/recipes-in-progress") }
          className="btn-go-recipe btn-profile">
          Suas receitas em andamento
        </button>
        <button 
          type="button" 
          onClick={ () => navigate("/") }
          className="btn-go-recipe btn-profile">
          Sair do app
        </button>
      </div>
    </div>
  );
}

export default Profile;
