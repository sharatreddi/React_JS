import React from "react";
import ReactDOM from "react-dom";
// import {add, multiply, subtract, divide} from "./calculator";
import * as calc from "./calculator";

ReactDOM.render(
  <ul>
    <li>{calc.add(1, 2)}</li>
    <li>{calc.multiply(2, 3)}</li>
    <li>{calc.subtract(7, 2)}</li>
    <li>{calc.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
