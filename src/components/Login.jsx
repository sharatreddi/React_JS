import React from "react";
import Input from "./Input";

function Login() {
  return (
    <div>
      <form className="form">
        <Input type="input" username="Username" />
        <Input type="input" username="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
