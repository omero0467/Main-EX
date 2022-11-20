import React, { Component } from "react";
​
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
      ],
    };
  }
​
  handleClick = (event) => {
    console.log(event.target);
    this.setState(
      (prevState) => ({
        toDos: prevState.toDos.map((item, index) => {
          if (event.target.id == index) {
            return { ...item, completed: !item.completed };
            // return ({ item.completed = !item.completed});
          }
          return item;
        }),
      }),
      () => {
        console.log(this.state);
      }
    );
  };
​
  render() {
    // const {name, completed} = this.state.toDos;
    return (
      <div>
        {this.state.toDos.map((item, index) => {
          return (
            <div
              id={index}
              key={index}
              onClick={(event) => this.handleClick(event)}
            >
              {item.name}
              {item.completed ? "V" : "X"}
            </div>
          );
        })}
      </div>
    );
  }
}