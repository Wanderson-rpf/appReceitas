import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const copy = require('clipboard-copy');

function ButtonShared() {
  const location = useLocation();
  const [sharemessage, setSharemessage] = useState(false);

  const handleCopyLink = () => {
    copy(`http://localhost:3000${location.pathname}`);
    setSharemessage(true);
    setTimeout(() => setSharemessage(false), 2000);
  };

  return (
    <div>
      <button type="button" onClick={ handleCopyLink }>
        { sharemessage && <p>Link copied!</p> }
        Share
      </button>
    </div>
  )
};

export default ButtonShared;
