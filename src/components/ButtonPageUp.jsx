import React, { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

function ButtonPageUp() {
  const [pagePositionY, setPagePositionY] = useState(0);

  const getPositionY = () => {
    setPagePositionY(window.scrollY);
  };

  window.addEventListener("scroll", getPositionY);

  return (
    <div>
      {pagePositionY > 50 && (
        <div className="button-page-up">
          <a href="#header">
            <BsArrowUpCircle className="icon-page-up" />
          </a>
        </div>
      )}
    </div>
  );
}

export default ButtonPageUp;
