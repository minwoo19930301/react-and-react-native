import React, { Component } from 'react';

function test(){
  return;
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  handleIncrease = () => {
    this.setState({
      num: this.state.num + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      num: this.state.num - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.num}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;