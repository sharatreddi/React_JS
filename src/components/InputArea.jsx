import React, { useState } from "react";

function InputArea(props) {
  const [inputtext, setinputtext] = useState("");

  function handleChange(event) {
    const newvalue = event.target.value;
    setinputtext(newvalue);
  }

  return (
    <div className="form">
      <input type="text" value={inputtext} onChange={handleChange} />
      <button
        onClick={() => {
          props.onAdd(inputtext);
          setinputtext("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
export default InputArea;
