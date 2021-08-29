import React, { Component } from "react";
class LayoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      value1: "Evant Name",
      value2: "Start Date",
      value3: "End Date",
      isInEditMode: false,
    };
  }
  displayHandler = () => {
    this.setState({
      display: !this.state.display,
    });
  };
  editHandler = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };
  updateValue = () => {
    this.setState({
      isInEditMode: false,
      value1: this.refs.theTextInput1.value,
      value2: this.refs.theTextInput2.value,
      value3: this.refs.theTextInput3.value,
    });
  };
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
        <p className="home">
          <div>
            {this.state.isInEditMode ? (
              <div>
                <div className="input_parent">
                  <input
                    type="text"
                    defaultValue={this.state.value1}
                    ref="theTextInput1"
                  />
                  <input
                    type="text"
                    defaultValue={this.state.value2}
                    ref="theTextInput2"
                  />
                  <input
                    type="text"
                    defaultValue={this.state.value3}
                    ref="theTextInput3"
                  />
                </div>
              </div>
            ) : (
              <div>{this.defaultHandler()}</div>
            )}
          </div>
          <div className="btn_parent">
            <div id="btn" onClick={this.displayHandler}>
              {this.state.display ? (
                <button className="btn" onClick={this.updateValue}>
                  Save
                </button>
              ) : (
                <button className="btn" onClick={this.editHandler}>
                  Edit
                </button>
              )}
              <div className="btn" onClick={this.displayHandler}>
                {this.state.display ? (
                  <button className="btn" onClick={this.editHandler}>
                    Close
                  </button>
                ) : (
                  <button className="btn" onClick={this.props.remove}>
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default LayoutPage;
