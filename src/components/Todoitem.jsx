import React, { useState } from "react";

function todoitem(props) {
  // function handleClick(event) {
  //   {props.didchange}
  // }

  return (
    <div
      onClick={() => {
        props.didchange(props.id);
      }}
    >
      <li>{props.name}</li>
    </div>
  );
}

export default todoitem;
