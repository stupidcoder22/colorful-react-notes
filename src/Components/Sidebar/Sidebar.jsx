import React, { useState } from "react";
import "./Sidebar.css";
import plusicon from "../../assets/plus.png";
import "./Sidebar.css";
function Sidebar() {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [listopen, setlistopen] = useState(false);
  return (
    <div className="sidebar">
      <img src={plusicon} alt="" onClick={() => setlistopen(!listopen)} />
      <ul className={`sidebar-list ${listopen ? "sidebar-list-active" : ""}`}>
        {colors.map((item, index) => (
          <li
            className="sidebar-list-item"
            key={index}
            style={{ backgroundColor: item }}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
