import React, { Component } from "react";

import { Button } from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {
    return (
      <div>
        <Button
          sign="-"
          count={this.state.count}
          updateCount={this.handleCount.bind(this)}
        />
        <input
          className="middle"
          type="text"
          name="name"
          value={this.state.count}
        />
        <Button
          sign="+"
          count={this.state.count}
          updateCount={this.handleCount.bind(this)}
        />
      </div>
    );
  }
}

export default App;
