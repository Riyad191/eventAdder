import React from "react";
import data from "./data";
import "./style.css";

const Actions = () => {
  return (
    <section className="actions">
      {data.map((action, index) => (
        <h1 key={index}>{action}</h1>
      ))}
    </section>
  );
};

export default Actions;
