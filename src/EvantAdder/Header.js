import React from "react";
import "./style.css";
function Header({ list }) {
  const theHeaderData = {
    title: "Events Adder App",
    EventsCount: "Number of Events",
  };
  console.log(list);

  return (
    <header>
      <h1>{theHeaderData.title}</h1>
      <h1>
        {theHeaderData.EventsCount}: <span id="number">{list.length}</span>
      </h1>
    </header>
  );
}

export default Header;
