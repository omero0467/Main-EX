import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 60,
      minutes: 1,
      hours: 0.0166,
    };
  }

  handleChangeInputSeconds = (event) => {
    console.log(event.target.value);
    this.setState((prev) => {
      return {
        seconds: event.target.value,
        minutes: event.target.value / 60,
        hours: event.target.value / 3600,
      };
    });
  };
  handleChangeInputMinutes = (event) => {
    console.log(event.target.value);
    this.setState((prev) => {
      return {
        seconds: event.target.value * 60,
        minutes: event.target.value,
        hours: event.target.value / 60,
      };
    });
  };
  handleChangeInputHours = (event) => {
    console.log(event.target.value);
    this.setState((prev) => {
      return {
        seconds: event.target.value * 3600,
        minutes: event.target.value * 60,
        hours: event.target.value,
      };
    });
  };

  render() {
    return (
      <div>
        App
        <input
          onChange={this.handleChangeInputSeconds.bind(this)}
          type="text"
          value={this.state.seconds}
        />
        <input
          onChange={this.handleChangeInputMinutes}
          type="text"
          value={this.state.minutes}
        />
        <input
          onChange={this.handleChangeInputHours}
          type="text"
          value={this.state.hours}
        />
      </div>
    );
  }
}