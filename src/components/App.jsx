import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  let time = new Date().toLocaleTimeString();
  const [count, setCount] = useState(time);
  console.log(time);
  function showTime() {
    let newTime = new Date().toLocaleTimeString();
    setCount(newTime);
  }
  setInterval(showTime, 100);

  // function increase() {
  //   setCount(count + 1);
  //   // count++;
  // }

  // function decrease() {
  //   setCount(count - 1);
  //   // count--;
  // }

  return (
    <div className="container">
      {/* <h1>{count}</h1> */}
      <h1>{count}</h1>
      <button onClick={showTime}>Get Time</button>
      {/* <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button> */}
    </div>
  );
}

export default App;
