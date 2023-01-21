import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// ------------------------------------------what happened in array/obj destructuring---------------------------------------
//It is all aby how to destructure arrays or objects and render them as an individual components
//its hell as tuff to explain, I mean, u'll be confused eitherways, just look thru the code and go thru vid 423,424
console.log(cars);

const [honda, tesla] = cars;
console.log(honda);

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
