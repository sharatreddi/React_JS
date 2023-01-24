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
    setfullname((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value
        };
      }
    });
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
