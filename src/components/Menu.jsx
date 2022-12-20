import React from "react";
import { FaUserCircle } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';
import { TbMeat } from 'react-icons/tb';
import { BiDrink } from 'react-icons/bi';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container-menu">
        <ul className="container-list-menu">
        <li>
            <Link to="/meals" className="list-items">
              <FaHome className="icon-menu" />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="list-items">
              <FaUserCircle className="icon-menu" />
              <p>User</p>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="list-items">
              <TbMeat className="icon-menu" />
              <p>Meals</p>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="list-items">
              <BiDrink className="icon-menu" />
              <p>Drinks</p>
            </Link>
          </li>
          <li>
            <Link to="/favorite" className="list-items">
              <MdFavorite className="icon-menu" />
              <p>Favorites</p>
            </Link>
          </li>
          <li>
            <Link to="/recipe-done" className="list-items">
              <BsFillCheckCircleFill className="icon-menu" />
              <p>Recipes Done</p>
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
