import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    cost: 0
  }

  handlePriceChange(e) {
    this.setState({cost: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('Submit')
  }

  render() {
    return (
      <div className="App">
      <p>Oak Log</p>
      <form
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <input
          type="text" 
          value={this.state.cost}
          onChange={(e) => this.handlePriceChange(e)}
        />
      </form>
      </div>
    );
  }
}

export default App;
