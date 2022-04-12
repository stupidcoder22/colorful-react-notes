import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [notes, setnotes] = useState([
    // { text: "Prateek", time: "2:23", color: "cyan" },
    // { text: "Angad", time: "2:23", color: "green" },
    // { text: "Vijay", time: "2:23", color: "pink" },
    // { text: "Hemant", time: "2:23", color: "blue" },
    // { text: "Arjun", time: "2:23", color: "violet" },
    // { text: "Prateek", time: "2:23", color: "brown" },
    // { text: "Angad", time: "2:23", color: "indigo" },
    // { text: "Vijay", time: "2:23", color: "grey" },
    // { text: "Anil", time: "2:23", color: "orange" },
    // { text: "Hemant", time: "2:23", color: "violet" },
    // { text: "Arjun", time: "2:23", color: "cyan" },
  ]);

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

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} />
    </div>
  );
}

export default App;
