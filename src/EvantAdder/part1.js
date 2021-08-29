import React, { Component } from "react";
import Layout from "./part2";
import "./style.css";
class EventsAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [],
    };
  }
  addItem = (e) => {
    e.preventDefault();
    const objectItem = {
      id: 1000 + Math.random(),
      value: this.state.item.slice(),
    };
    this.state.list.push(objectItem);
    this.setState({ item: "" });
  };
  deleteItem(id) {
    console.log(id);
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <section className="main_section">
        <header>
          <h1>Events Adder App </h1>
          <h1>
            {" "}
            Number of Events: <span id="number">
              {this.state.list.length}
            </span>{" "}
          </h1>
        </header>
        <div className="main_card">
          <div className="add_btn_parent">
            <button className="add_events" onClick={this.addItem}>
              Add Event
            </button>
            <div className="title">
              <div>EVENTS</div>
              <div>START DATE</div>
              <div>END DATE</div>
              <div className="actions">ACTIONS</div>
            </div>
          </div>
          {this.state.list.map((item) => (
            <Layout
              key={item.id}
              remove={() => this.deleteItem(item.id)}
            ></Layout>
          ))}
        </div>
      </section>
    );
  }
}
export default EventsAdder;
