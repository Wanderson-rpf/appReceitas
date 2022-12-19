import React from "react";
import { FaUserCircle } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container-menu">
        <ul>
          <li>
            <Link>
              <FaUserCircle />
              <p>User</p>
            </Link>
          </li>
          <li>
            <Link>
              <GrFavorite />
              <p>Favorites</p>
            </Link>
          </li>
          <li>
            <Link>
              <BsFillCheckCircleFill />
              <p>Recipes Done</p>
            </Link>
          </li>
          <li>
            <Link>
              <FiLogOut />
              <p>Logout</p>
            </Link>
          </li>
        </ul>
    </div>  
  );
}

export default Menu;
