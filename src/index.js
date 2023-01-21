import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// ------------------------------------------what happened in UseState hook---------------------------------------
//Here, The useState hook is a special function that takes the initial state as an argument and returns an array of two entries
//one is assume count and other is setCount, we can manipulate the value of first one(count) using the special function
//Go thru the code once, made that increase and decrease count(uncomment them), and also get time thing(comment that setInterval thing and press on get time to see the time gettin updated)

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
