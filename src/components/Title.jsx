import React from "react";
import { GiHotMeal } from "react-icons/gi";
import { AiOutlineCheckCircle, AiOutlineUser } from 'react-icons/ai';
import { ImGlass2 } from 'react-icons/im';
import { HiHeart, HiPencilAlt } from 'react-icons/hi';
import { useLocation } from "react-router-dom";

function Title(title) {
  const location = useLocation();
  let icon;
  if (location.pathname.includes('meals')) {
    icon = <GiHotMeal />;
  } else if (location.pathname.includes('drinks')) {
    icon = <ImGlass2 />;
  } else if (location.pathname.includes('favorite')) {
    icon = <HiHeart />;
  } else if (location.pathname.includes('done')) {
    icon = <AiOutlineCheckCircle />;
  } else if (location.pathname.includes('profile')) {
    icon = <AiOutlineUser />;
  } else if (location.pathname.includes('recipes-in-progress')) {
    icon = <HiPencilAlt />;
  }

  return (
    <div className="container-title">
        <div className="box-title">
          <span className="icon-title">{icon}</span>
          <h1 className="title-page">{ title.title }</h1>
          <span className="icon-title">{icon}</span>
        </div>
      </div>
  );
}

export default Title;
