import React from "react";
import "./Note.css";
import deleteIcon from "../../assets/delete.png";
function Note(prop) {
  const { id, text, time, color, delteNote } = prop.item;

  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <textarea className="note_text" defaultValue={text} />
      <div className="note-footer">
        <p>{formatDate(time)}</p>
        <img src={deleteIcon} alt="" onClick={() => prop.deleteNote(id)} />
      </div>
    </div>
  );
}

export default Note;
