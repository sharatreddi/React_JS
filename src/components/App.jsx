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
  const [fullname, setfullname] = useState({
    fname: "",
    lname: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setfullname((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    console.log(value);
  }

  const [headingText, setheadingText] = useState("");
  function clicked(event) {
    console.log(fullname);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <form onSubmit={clicked}>
        <input
          name="fname"
          onChange={handleChange}
          value={fullname.fname}
          type="text"
          placeholder="What's your name?"
        />
        <input
          name="lname"
          onChange={handleChange}
          value={fullname.lname}
          type="text"
          placeholder="What's your Last name?"
        />
        <button
          type="submit"
          style={{ backgroundColor: ismouseover ? "black" : "white" }}
          onMouseOver={Mouseover}
          onMouseOut={Mouseout}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
