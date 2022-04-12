import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

function NoteContainer() {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note_container_notes">
        <Note note={{ text: "Prateek", time: "2:23", color: "cyan" }} />
        <Note note={{ text: "Angad", time: "2:23", color: "green" }} />
        <Note note={{ text: "Vijay", time: "2:23", color: "pink" }} />
        <Note note={{ text: "Anil", time: "2:23", color: "red" }} />
        <Note note={{ text: "Hemant", time: "2:23", color: "blue" }} />
        <Note note={{ text: "Arjun", time: "2:23", color: "violet" }} />
        <Note note={{ text: "Prateek", time: "2:23", color: "brown" }} />
        <Note note={{ text: "Angad", time: "2:23", color: "indigo" }} />
        <Note note={{ text: "Vijay", time: "2:23", color: "grey" }} />
        <Note note={{ text: "Anil", time: "2:23", color: "orange" }} />
        <Note note={{ text: "Hemant", time: "2:23", color: "violet" }} />
        <Note note={{ text: "Arjun", time: "2:23", color: "cyan" }} />
      </div>
    </div>
  );
}

export default NoteContainer;
