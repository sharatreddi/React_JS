import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import List from "./List";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1>My favs</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phn_no={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        phn_no={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        phn_no={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
