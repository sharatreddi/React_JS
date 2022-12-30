//Created inline styles, and also declared an obj and called it in heading inline style, added few more to em, like conditional statements , that changes the colors dynamically
import React from "react";
import ReactDOM from "react-dom";

// const date = new Date(2022, 30, 12, 12);
const currtime = new Date().getHours();
console.log(currtime);

let greeting;
let customStyle;
//let custStyle = { color = "" }

if (currtime < 12) {
  greeting = "Good Morning";
  customStyle = {
    color: "red"
  };
  //custStyle.color="red"
} else if (currtime > 12 && currtime < 18) {
  greeting = "Good Afternoon";
  customStyle = {
    color: "green"
  };
} else if (currtime > 18 && currtime < 24) {
  greeting = "Good Evng";
  customStyle = {
    color: "blue"
  };
}
ReactDOM.render(
  <div>
    <h2 style={customStyle}>{greeting}</h2>
  </div>,
  document.getElementById("root")
);
