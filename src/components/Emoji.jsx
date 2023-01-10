import React from "react";

function Emoji(emojee) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {emojee.emoji}
        </span>
        <span>{emojee.name}</span>
      </dt>
      <dd>{emojee.meaning}</dd>
    </div>
  );
}

export default Emoji;
