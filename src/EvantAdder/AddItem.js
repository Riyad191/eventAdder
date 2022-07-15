import React from "react";
import "./style.css";
const AddItem = ({ addItem }) => {
  return (
    <button className="add_events" onClick={addItem}>
      Add Event
    </button>
  );
};

export default AddItem;
