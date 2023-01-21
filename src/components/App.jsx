import React, { useState } from "react";

function App() {
  const [click, setClick] = useState("hello");
  function clicked() {
    setClick("clicked");
  }
  const [ismouseover, setmouseover] = useState(false);
  function Mouseover() {
    setmouseover(true);
  }
  function Mouseout() {
    setmouseover(false);
  }

  return (
    <div className="container">
      <h1>{click}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: ismouseover ? "black" : "white" }}
        onMouseOver={Mouseover}
        onMouseOut={Mouseout}
        onClick={clicked}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
