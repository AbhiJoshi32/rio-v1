import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
WebFont.load({
    google: {
      families: ['Roboto+Condensed','Roboto' ,'sans-serif']
    }
  });