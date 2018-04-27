
import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'blue',
      message: '',
    };
  }


  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            User:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
  }

}

export default Login;
