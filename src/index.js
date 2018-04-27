import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.css';
import { Router, Route, browserHistory } from 'react-router';


const Root = () => {
  return (
      <div className="container">
        <Router history={browserHistory}>
          <Route path="/" component={Login}/>
          <Route path="/special" component={App}/>
        </Router>
      </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();