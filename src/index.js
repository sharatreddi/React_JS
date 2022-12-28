//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

var firstname = "Chowther";
var lastname = "Cherry";
var num = "7";
const currentdate = new Date();
var currentyr = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>My Favorite things</h1>
    <ul>
      <li>Football</li>
      <li>Peace</li>
      <li>webdev(ig aon)</li>
    </ul>
    <h2>Hello {firstname + " " + lastname}!!</h2>
    <p>Ur lucky num is {Math.floor(Math.random() * 10)}</p>
    <p>Created by {lastname}</p>
    <p>Copyright {currentdate.getFullYear()}</p>
    {/* paina parantheses important thammu, coz its a method, without it, it'll be a function */}
  </div>,
  document.getElementById("root")
);
