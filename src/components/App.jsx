import React, { useState } from "react";
import InputArea from "./InputArea";
import Todoitem from "./Todoitem";

//here we created a todo app
//we basically created two react states, one for the input button, and the other for the add button
//the input button takes the value and sets it
//when the button is clicked we use a react state, store the prev values in an array (using spread operator)
//then we render each of them down using map function
//adding more to it, here we divided them into components
//one is inputarea and other is todoitem
//as we shld have control on each input item, we also created an index for each of it using the map function
//did the corresponding changes for inputarea to, extracted all the functions,states and all that are related to the component
//u might find this a bit confusing, so refer vid 433

function App() {
  const [items, setitems] = useState([]);

  function handleClick(inputtext) {
    setitems((prevItems) => [...prevItems, inputtext]);
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
      <InputArea onAdd={handleClick} />
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
