import React, { Component } from "react";

export class DisplayEvents extends Component {
  render() {
    return (
      <div>
        {this.props.isInEditMode ? (
          <div>
            <div className="input_parent">
              <input
                type="text"
                defaultValue={this.props.value1}
                ref="theTextInput1"
              />
              <input
                type="date"
                defaultValue={this.props.value2}
                ref="theTextInput2"
              />
              <input
                type="date"
                defaultValue={this.props.value3}
                ref="theTextInput3"
              />
            </div>
          </div>
        ) : (
          <div>{this.props.defaultHandler}</div>
        )}
      </div>
    );
  }
}

export default DisplayEvents;
