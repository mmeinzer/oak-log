import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    cost: "Default"
  }
  handlePriceChange(e) {
    this.setState({cost: e.target.value})
  }

  render() {
    return (
      <div className="App">
      <p>Oak Log</p>
      <input
        type="text" 
        value={this.state.cost}
        onChange={(e) => this.handlePriceChange(e)}
      />
      </div>
    );
  }
}

export default App;
