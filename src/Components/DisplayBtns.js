import React from "react";
import "./style.css";
const DisplayEvent = ({
  display,
  remove,
  displayHandler,
  updateValue,
  editHandler,
}) => {
  return (
    <div className="btn_parent">
      <div id="btn" onClick={displayHandler}>
        {display ? (
          <button className="btn" onClick={updateValue}>
            Save
          </button>
        ) : (
          <button className="btn" onClick={editHandler}>
            Edit
          </button>
        )}
        <div className="btn" onClick={displayHandler}>
          {display ? (
            <button className="btn" onClick={editHandler}>
              Close
            </button>
          ) : (
            <button className="btn" onClick={remove}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayEvent;
