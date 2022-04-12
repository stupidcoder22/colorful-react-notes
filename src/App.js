import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [notes, setnotes] = useState(
    JSON.parse(localStorage.getItem("notedata")) || []
  );

  const addNote = (color) => {
    const tempnotes = [...notes];
    tempnotes.push({
      id: Date.now(),
      text: "",
      time: Date.now(),
      color,
    });
    setnotes(tempnotes);
  };

  const deleteNote = (id) => {
    const tempnote = notes.filter((item) => item.id !== id);
    setnotes(tempnote);
  };

  useEffect(() => {
    localStorage.setItem("notedata", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
