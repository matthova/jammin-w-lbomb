import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLimit: false,
      foo: 'bar'
    };

    this.hanson = this.hanson.bind(this);
  }

  hanson() {
    // if (this.state.toLimit === true) {
    //   this.setState({ toLimit: false })
    // } else {
    //   this.setState({ toLimit: true })
    // }
    this.setState({ toLimit: !this.state.toLimit })
  }

  render() {
    console.log('were rendering', this.state, this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Weather, Dudes</h1>
        </header>
        <p>To the limit?</p>
        <p>{this.state.toLimit ? 'YEA!' : 'NOPE'}</p>
        <button className="yourface" onClick={this.hanson}>WORDS!</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;

