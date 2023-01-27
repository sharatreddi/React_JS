import React, { useState } from "react";
import Todoitem from "./Todoitem";

//here we created a todo app
//we basically created two react states, one for the input button, and the other for the add button
//the input button takes the value and sets it
//when the button is clicked we use a react state, store the prev values in an array (using spread operator)
//then we render each of them down using map function

function App() {
  const [inputtext, setinputtext] = useState("");
  const [items, setitems] = useState([]);

  function handleChange(event) {
    const newvalue = event.target.value;
    setinputtext(newvalue);
  }

  function handleClick() {
    setitems((prevItems) => [...prevItems, inputtext]);
    setinputtext("");
  }

  function delitem(id) {
    setitems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputtext} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((eachItem, index) => (
            <Todoitem
              key={index}
              id={index}
              name={eachItem}
              didchange={delitem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
