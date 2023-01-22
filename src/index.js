import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// ------------------------------------------what happened in react forms---------------------------------------
//Here, I dealt with forms in react
//what happened in this is I kept in some event handlers for input like onChange and etc
//also included another event handler of button, together which makes it take the input and display the name when button is pressed
//then for form, they refreshes(makin send, post reqs and all) everytym u press submit, to prevent this, we take the event handler of button out of it and place in form
//we had the control of that event now, so we use event.preventDefault which prevents refreshing
//look at the last of vid 426 for more clarity
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
