import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Counter Office Hours</h1>
        <div>
          <p>{`Your count is ${this.props.count}`}</p>
          <button onClick={this.props.add}>Add</button>
          <button onClick={this.props.subtract}>Subtract</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch( ({ type: 'ADD' }) ),
    subtract: () => dispatch( ({ type: 'SUBTRACT' }) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
