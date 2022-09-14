import React, { Component } from "react";
class TestComponent extends Component {
  timer = null;

  componentDidMount() {
    console.log("Test component happened");

    this.timer = setTimeout(() => {
      console.log("3s have passed");
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return <div>TestComponent</div>;
  }
}

export default TestComponent;
