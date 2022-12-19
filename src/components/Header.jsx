import React from "react";
import logoHeader from '../img/logo_secundaria_branca.png'
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <div className="container-header">
      <img src={ logoHeader } alt="Logo secundaria branca" className="logo-secondary" />
    </div>
  );
}

export default Header;
