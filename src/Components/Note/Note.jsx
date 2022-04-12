import React from "react";
import "./Note.css";
function Note(props) {
  //   console.log(text, time, color);
  const { text, time, color } = props.note;
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <textarea className="note_text" defaultValue={text} />
      <p>{time}</p>
    </div>
  );
}

export default Note;
