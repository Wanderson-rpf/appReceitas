import React from "react";
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineUser, AiOutlineCheckCircle } from 'react-icons/ai';
import { TbMeat } from 'react-icons/tb';
import { BiDrink } from 'react-icons/bi';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container-menu">
        <ul className="container-list-menu">
        <li>
            <Link to="/meals" className="list-items">
              <AiOutlineHome className="icon-menu" />
              <p>Início</p>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="list-items">
              <AiOutlineUser className="icon-menu" />
              <p>Usuário</p>
            </Link>
          </li>
          <li>
            <Link to="/meals" className="list-items">
              <TbMeat className="icon-menu" />
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
            <Link to="/done-recipes" className="list-items">
              <AiOutlineCheckCircle className="icon-menu" />
              <p>Concluídas</p>
            </Link>
          </li>
          <li className="opt-logout">
            <Link to="/" className="list-items">
              <FiLogOut className="icon-menu" />
              <p>Sign out</p>
            </Link>
          </li>
        </ul>
    </div>  
  );
}

export default Menu;
