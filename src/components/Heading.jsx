import React from "react";

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

function Heading() {
  return <h2 style={customStyle}>{greeting}</h2>;
}
export default Heading;
// no paranthesis is kept after heading here coz we dont want it to be called immediately
// ilane cheppindhi mari as of now
