import React, { useState } from "react";

function App() {
  // functions and states for setting that hover button of submit

  const [ismouseover, setmouseover] = useState(false);
  function Mouseover() {
    setmouseover(true);
  }

  function Mouseout() {
    setmouseover(false);
  }
  // functions and states for displaying name after hello
  const [name, setName] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  const [headingText, setheadingText] = useState("");
  function clicked(event) {
    setheadingText(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={clicked}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          type="submit"
          style={{ backgroundColor: ismouseover ? "black" : "white" }}
          onMouseOver={Mouseover}
          onMouseOut={Mouseout}
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default App;
