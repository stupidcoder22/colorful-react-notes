import React from "react";
import "./Note.css";
function Note({ item }) {
  //   console.log(text, time, color);
  const { text, time, color } = item;
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <textarea className="note_text" defaultValue={text} />
      <div className="note-footer">
        <p>{time}</p>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Note;
