import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    costInCents: 0,
    expenses: []
  }

  handlePriceChange(e) {
    let cents = Number.parseInt(e.target.value, 10)
    if (!cents) {
      cents = 0;
    }
    this.setState({costInCents: cents})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        expenses: prevState.expenses.concat({cost: this.state.costInCents}),
        costInCents: 0
      }
    })
  }

  removeAllExpenses(e) {
    this.setState({expenses: []})
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Oak Log</h1>
        <form
          className="cost-form"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            className="cost-input"
            type="number"
            pattern="[0-9]*"
            value={this.state.costInCents.toString()}
            onChange={(e) => this.handlePriceChange(e)}
            autoFocus
          />
          <input
            className="submit-button"
            type="submit"
            value="Submit"
          />
        </form>
        <h2 className="expenses-title">Recent Expenses</h2>
        <div className="expenses">
        <button onClick={(e) => this.removeAllExpenses()}>Clear All</button>
          {this.state.expenses.map(expense => {
            return (
              <div className="expense">
                ${(expense.cost / 100).toFixed(2).toString()}
                <button onClick={(e) => {}}>x</button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
