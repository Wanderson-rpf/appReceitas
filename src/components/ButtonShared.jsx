import React, { useState } from "react";
import { HiShare } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const copy = require('clipboard-copy');

function ButtonShared() {
  const location = useLocation();
  const [sharemessage, setSharemessage] = useState(false);

  const handleCopyLink = () => {
    copy(`http://localhost:3000${location.pathname}`);
    setSharemessage(true);
    setTimeout(() => setSharemessage(false), 2500);
  };

  return (
    <div>
      <button type="button" onClick={ handleCopyLink } className="btn-share">
        { sharemessage && <p className="copy-share">Link copied!</p> }
        <HiShare className="icon-share" />
      </button>
    </div>
  )
};

export default ButtonShared;
