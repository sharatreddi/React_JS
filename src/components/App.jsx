import React from "react";
import Emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map((emojee) => (
          <Emoji
            key={emojee.id}
            emoji={emojee.emoji}
            name={emojee.name}
            meaning={emojee.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
