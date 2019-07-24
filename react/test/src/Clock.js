import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {this.props};
    }
   
    render() {
      
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.}.</h2>
        </div>
      );
    }
  }
  
export default Clock;