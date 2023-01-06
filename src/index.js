import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Card from "./components/Card";
// ------------------------------------------what happened anedhi---------------------------------------
//so ikkad em jarigindh ante, we used props feature of react
//peddha peddha code segments ni reusability kosam props vaadutham
// ------------------------------------------what happened in react props practice anedhi---------------------------------------
//so created a contacts.js(array of js objects containing the data) file anamata, then used it in app.jsx by exporting the file
//then called that app.js in index.js
//u cant apply css in props, they're like objs anko, can only give css to their respective html(those functions u define and return)

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
