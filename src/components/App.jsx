import React, { useState } from "react";

//here we created a todo app
//we basically created two react states, one for the input button, and the other for the add button
//the input button takes the value and sets it
//when the button is clicked we use a react state, store the prev values in an array (using spread operator)
//then we render each of them down using map function

function App() {
  const [todoitem, setTodoitem] = useState("");
  const [items, setitems] = useState([]);

  function handleChange(event) {
    const newvalue = event.target.value;
    setTodoitem(newvalue);
  }

  function handleClick() {
    setitems((prevItems) => [...prevItems, todoitem]);
    setTodoitem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={todoitem} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
