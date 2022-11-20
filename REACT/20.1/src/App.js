import React, { Component } from "react";
​
export default class App extends Component {
  constructor(props) {
    super(props);
​
    this.state = {
      value: 0,
    };
  }
  clickInc = () => {
    if (this.state.value < 10) {
      this.setState(
        (prevValue) => ({ value: prevValue.value + 1 }),
        () => console.log(this.state.value)
      );
    }
  };
  clickDec = () => {
    if (this.state.value > -10) {
      this.setState(
        (prevValue) => ({ value: prevValue.value - 1 }),
        () => console.log(this.state.value)
      );
    }
  };
​
  render() {
    const { value } = this.state;
    return (
      <div className="myApp">
        <button onClick={this.clickInc}>increment</button>
        <button onClick={this.clickDec}>decrement</button>
        <div
          style={{ color: value < 0 ? "red" : value > 0 ? "green" : "black" }}
        >
          {value}
        </div>
      </div>
    );
  }
}