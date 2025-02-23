import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () =>{
        this.setState((prevState) => ({count: prevState.count+1}));
    }
    decrement = () =>{
        this.setState((prevState) => ({count: prevState.count-1}));
    }
  render() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "90vh"
        }}>
            <h1>Counter App</h1>
            <p>Count: {this.state.count}</p>
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
              width: "300px"
          }}>
              <button onClick={this.increment} >Increment</button>
              <button onClick={this.decrement}>Decrement</button>
            </div>
        </div>
    )
  }
}

export default ClassCounter