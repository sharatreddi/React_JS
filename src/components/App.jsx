import React, { useState } from "react";

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
