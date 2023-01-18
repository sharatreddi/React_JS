import React from "react";
import Form from "./Form";

//change it to true here and u'll see how the form changes
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
