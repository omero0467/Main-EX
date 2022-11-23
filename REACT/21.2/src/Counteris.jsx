import React, { Component } from "react";
import axios from "axios";

export default class Counteris extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      input: "",
    };
  }

  componentDidMount() {
    (async () => {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      this.setState(
        { countries: data.map((item) => item.name.common).sort() }
      );
    })();
  }



  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.setState((prev) => ({ ...prev, input: e.target.value }));
          }}
          value={this.state.input}
        />
        {this.state.countries
          .filter((item) => {
            if (this.state.input !== "") {
              return item.toLowerCase().includes(this.state.input.toLowerCase());
            }
            return item;
          })
          .map((item) => (
            <div key={item}>{item}</div>
          ))}
      </div>
    );
  }
}

