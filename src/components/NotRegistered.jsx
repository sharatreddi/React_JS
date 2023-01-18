import React from "react";
import Input from "./Input";

function NotRegistered() {
  return (
    <div>
      <form className="form">
        <Input type="input" username="Username" />
        <Input type="input" username="Password" />
        <Input type="input" username="Confirm Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default NotRegistered;
