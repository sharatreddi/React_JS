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
  const [details, setdetails] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  // function handleChange(event) {
  //   console.log(event.target.value);
  //   const newValue = event.target.value;
  //   const inputname = event.target.name;
  //   setfullname((prevValue) => {
  //     if (inputname === "fname") {
  //       return {
  //         fname: newValue,
  //         lname: prevValue.lname
  //       };
  //     } else if (inputname === "lname") {
  //       return {
  //         fname: prevValue.fname,
  //         lname: newValue
  //       };
  //     }
  //   });
  // }

  //we can minimise the above handle change event into much simpler code
  function handleChange(event) {
    console.log(event.target.value);
    // here we destructured the object(event.target),
    // such that name corresponds to the input's name that is triggered and value is the value we enter in it

    const { value, name } = event.target;
    /*---------------------------------------------------A warning---------------------------------------------------------*/
    // in the future, do not try to access an event in the stateful setups (i.e setfullname function here)
    //for example instead of gettin the name here in the bottom, if we try event.target.name, it triggers the "synthetic events reused" error in the console
    //refer vid 428 last for more clarity
    //refer the above code, if in case u did not understand thisbelow handlechange event
    //this one is a replica of the above code, but just destructured the event.target into respective things
    setdetails((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: value
        };
      }
    });
  }

  const [headingText, setheadingText] = useState("");
  function clicked(event) {
    console.log(details);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {details.fname} {details.lname}
      </h1>
      <p>{details.email}</p>
      <form onSubmit={clicked}>
        <input
          name="fname"
          onChange={handleChange}
          value={details.fname}
          type="text"
          placeholder="What's your name?"
        />
        <input
          name="lname"
          onChange={handleChange}
          value={details.lname}
          type="text"
          placeholder="What's your Last name?"
        />
        <input
          name="email"
          onChange={handleChange}
          value={details.email}
          type="text"
          placeholder="Enter email"
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
