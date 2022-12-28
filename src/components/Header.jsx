import React, { useState } from "react";
import logoHeader from '../img/logo_secundaria_branca.png'
import Menu from "./Menu";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="container-header" id="header">
      <img src={ logoHeader } alt="Logo secundaria branca" className="logo-secondary" />
      <div className={ menuActive ? 'toggle active' : 'toggle'} onClick={handleToggleMenu}></div>
      { menuActive && <Menu />}
    </div>
  );
}

export default Header;
