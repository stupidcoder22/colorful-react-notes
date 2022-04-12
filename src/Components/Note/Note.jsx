import React from "react";
import "./Note.css";
import deleteIcon from "../../assets/delete.png";
function Note(prop) {
  //   console.log(text, time, color);
  const { id, text, time, color, delteNote } = prop.item;
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <textarea className="note_text" defaultValue={text} />
      <div className="note-footer">
        <p>{time}</p>
        <img src={deleteIcon} alt="" onClick={() => prop.deleteNote(id)} />
      </div>
    </div>
  );
}

export default Note;
