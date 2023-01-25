import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// ------------------------------------------what happened in javascript ES6 spread operator---------------------------------------
//The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make deep copies of JS objects.
// put 3 dots before the required array or object, and that'll be included in another array/object
//written down is some of the operation using spread operator
//also changed the whole if things in app component, used spread operator, have a look
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Guava", ...citrus, "Mango"];

console.log(fruits);

const players = {
  Madrid: "Ronaldo",
  Barca: "Messi"
};

const baller = {
  ...players,
  Barcelona: "Neymar"
};

console.log(baller);
