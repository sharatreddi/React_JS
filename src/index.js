import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Card from "./components/Card";
// ------------------------------------------what happened anedhi(react dev tools)---------------------------------------
//so ikkad em jarigindh ante, I mapped data to componentd
// ------------------------------------------what happened in mapping data to components---------------------------------------
//Here, in this, we used map function, it is used to parse each and every element of an array(basically designed fot it)
//This map basically takes a function as an input, and that happened to be our createEmoji function in app.jsx which calls emoji.jsx and every
//element in emojipedia.js is rendered.

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
