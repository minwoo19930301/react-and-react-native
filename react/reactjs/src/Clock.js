import React, { Component } from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.setState = {date: "will"};
    }
  
    render() {
      setTimeout(()=>{
        this.setState({date: new Date()})
      }, 1000)
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
    
  }