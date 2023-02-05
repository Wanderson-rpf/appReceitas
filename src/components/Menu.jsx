import React from "react";
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineUser, AiOutlineCheckCircle } from 'react-icons/ai';
import { BiDrink } from 'react-icons/bi';
import { HiPencilAlt } from 'react-icons/hi';
import { GiHotMeal } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchRecipesMeals } from "../feature/meals/mealsSlice";

function Menu() {
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const handlePageDefault = () => {
    dispacth(fetchRecipesMeals());
    navigate('/meals');
  };

  return (
    <div className="container-menu">
        <ul className="container-list-menu">
        <li>
            <div className="list-items" onClick={ handlePageDefault }>
              <AiOutlineHome className="icon-menu" />
              <p>Início</p>
            </div>
          </li>
          <li>
            <Link to="/meals" className="list-items">
              <GiHotMeal className="icon-menu" />
              <p>Pratos</p>
            </Link>
          </li>
          <li>
            <Link to="/drinks" className="list-items">
              <BiDrink className="icon-menu" />
              <p>Bebidas</p>
            </Link>
          </li>
          <li>
            <Link to="/favorite" className="list-items">
              <MdOutlineFavoriteBorder className="icon-menu" />
              <p>Favoritos</p>
            </Link>
          </li>
          <li>
            <Link to="/recipes-in-progress" className="list-items">
              <HiPencilAlt className="icon-menu" />
              <p>Em andamento</p>
            </Link>
          </li>
          <li>
            <Link to="/done-recipes" className="list-items">
              <AiOutlineCheckCircle className="icon-menu" />
              <p>Concluídas</p>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="list-items">
              <AiOutlineUser className="icon-menu" />
              <p>Usuário</p>
            </Link>
          </li>
          <li className="opt-logout">
            <Link to="/" className="list-items">
              <FiLogOut className="icon-menu" />
              <p>Sair</p>
            </Link>
          </li>
        </ul>
    </div>  
  );
}

export default Menu;
