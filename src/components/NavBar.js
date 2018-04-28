import React from 'react';
import { Link } from 'react-router-dom';

import LogOffButton from './LogOff';
import * as routes from './routes';

const Navigation = ({ authUser }) =>
    <div>
      { authUser
          ? <NavigationAuth />
          : <NavigationNonAuth />
      }
    </div>

const NavigationAuth = () =>
    <ul>
      <h1>DISASTER ALERT SYSTEM</h1>
      <li><LogOffButton /></li>
    </ul>

const NavigationNonAuth = () =>
    <ul>
      <h1>DISASTER ALERT SYSTEM</h1>
      <li><Link to={routes.LOG_IN}>Log In</Link></li>
    </ul>
export default Navigation;