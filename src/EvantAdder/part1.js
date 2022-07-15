import React, { Component } from "react";
import Layout from "./Layout";
import Header from "./Header";
import AddItem from "./AddItem";
import "./style.css";
class EventsAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [],
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const objectItem = {
      id: 1000 + Math.random(),
      value: this.state.item.slice(),
    };
    this.state.list.push(objectItem);
    this.setState({ item: "" });
  }
  deleteItem(id) {
    console.log(id);
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <>
        <section className="main_section">
          <Header list={this.state.list} />
          <div className="main_card">
            <div className="add_btn_parent">
              <AddItem addItem={this.addItem} />
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
      </>
    );
  }
}
export default EventsAdder;
