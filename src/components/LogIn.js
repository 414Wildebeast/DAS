import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { auth } from '../firebase';
import * as routes from './routes';

const LoginPage = ({ history }) =>
    <div>
      <h1>Login</h1>
      <LogInForm history={history} />
    </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doLoginWithEmailAndPassword(email, password)
        .then(() => {
          this.setState(() => ({ ...INITIAL_STATE }));
          history.push(routes.ALERT);
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
        });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
        password === '' ||
        email === '';

    return (
        <form onSubmit={this.onSubmit}>
          <input
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              type="text"
              placeholder="Email Address"
          />
          <input
              value={password}
              onChange={event => this.setState(byPropKey('password', event.target.value))}
              type="password"
              placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Log In
          </button>

          { error && <p>{error.message}</p> }
        </form>
    );
  }
}

export default withRouter(LoginPage);

export {
  LogInForm,
};