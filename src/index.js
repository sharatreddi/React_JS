//Created inline styles, and also declared an obj and called it in heading inline style

import React from "react";
import ReactDOM from "react-dom";

// ---------------------main part--------------------
// we create inline Styles, we shld give "" coz in JSON, it takes as a string
// also we create an object here and then call it in inline styles
const customStyle = {
  color: "blue",
  fontSize: "25px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1 style={customStyle}>My Fav things</h1>
  </div>,
  document.getElementById("root")
);
