import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

function NoteContainer(prop) {
  const reverse = (arr) => {
    const array = [];
    for (let index = arr.length - 1; index >= 0; index--) {
      array.push(arr[index]);
    }
    return array;
  };
  const newnotes = reverse(prop.notes);
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note_container_notes">
        {newnotes.length > 0 ? (
          newnotes.map((item) => {
            return <Note item={item} key={item.id} />;
          })
        ) : (
          <h3>No Notes here</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
