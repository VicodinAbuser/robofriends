import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card.js';
// import CardList from './Cardlist.js';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
