import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
