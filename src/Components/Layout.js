import React, { Component } from "react";
import DisplayBtns from "./DisplayBtns";
import DisplayEvents from "./DisplayEvents";
class LayoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      value1: "text",
      value2: "data",
      value3: "date",
      isInEditMode: false,
    };
    this.displayHandler = this.displayHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.defaultHandler = this.defaultHandler.bind(this);
  }
  displayHandler() {
    this.setState({
      display: !this.state.display,
    });
  }
  editHandler() {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  }
  updateValue() {
    this.setState({
      isInEditMode: false,
      value1: this.refs.theTextInput1.value,
      value2: this.refs.theTextInput2.value,
      value3: this.refs.theTextInput3.value,
    });
  }
  defaultHandler = () => {
    return (
      <div className="heroParent">
        <button className="hero" onClick={this.editHandler}>
          {this.state.value1}
        </button>
        <button className="hero" onClick={this.editHandler}>
          {this.state.value2}
        </button>
        <button className="hero" onClick={this.editHandler}>
          {this.state.value3}
        </button>
      </div>
    );
  };
  render() {
    return (
      <div>
        <section className="home">
          <DisplayEvents
            isInEditMode={this.state.isInEditMode}
            value1={this.state.value1}
            value2={this.state.value2}
            value3={this.state.value3}
            defaultHandler={this.defaultHandler()}
          />
          <DisplayBtns
            displayHandler={this.displayHandler}
            updateValue={this.updateValue}
            editHandler={this.editHandler}
            display={this.state.display}
            remove={this.props.remove}
            id={this.props.id}
          />
        </section>
      </div>
    );
  }
}

export default LayoutPage;
