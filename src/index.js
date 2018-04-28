import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';
import 'semantic-ui-css/semantic.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();