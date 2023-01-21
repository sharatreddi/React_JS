import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// ------------------------------------------what happened in Event handling of react---------------------------------------
//Here, I dealt with some event handling of react
//created a button, when it is hovered, turns black and white when not, here i did it using event handlers, inline styles, react hooks, use states
//maintainin the state of our react code, we deal with event listeners, using ternary operations, go thru the code and if any doubts, refer vid 425.
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
