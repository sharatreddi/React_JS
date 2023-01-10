import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import List from "./List";
import contacts from "../contacts";
import Emojipedia from "../emojipedia";
import Emoji from "./Emoji";

// function createCard(contact) {
//   return (
//     <Card
//       key={contact.id}
//       key={contact.id}
//       name={contact.name}
//       img={contact.imgURL}
//       email={contact.email}
//       phn_no={contact.phone}
//     />
//   );
// }

function createEmoji(emojee) {
  return (
    <Emoji
      key={emojee.id}
      emoji={emojee.emoji}
      name={emojee.name}
      meaning={emojee.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(createEmoji)}
        {/* Idhi seperate code, code before doin practice thingy, ila kindha prathidhaniki raskokunda map fn use chesi cheyyachu ane dhanki idhi example 
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
      /> */}
      </dl>
    </div>
  );
}

export default App;
