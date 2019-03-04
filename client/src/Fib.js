import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    input: '',
    val1: ''
  };

  handleSubmit = async event => {
    event.preventDefault();

    const res = await axios.post('/api/pass', {
      value: this.state.input
    });
    this.setState({ val1: res.data });
  };

  dataRendering() {
    return this.state.val1;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Pass Number</label>
          <input
            value={this.state.input}
            onChange={event => this.setState({ input: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3>data is now:</h3>
        {this.dataRendering()}
      </div>
    );
  }
}

export default Fib;
