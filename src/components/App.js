import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './NavBar';
import LogInPage from './LogIn';
import Alert from './Alert';

import * as routes from './routes';
const App = () =>

        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />

            <Route
                exact path={routes.LOG_IN}
                component={() => <LogInPage />}

            />

            <Route exact path={routes.ALERT} component={() => <Alert />} />

          </div>
        </Router>

export default App;
