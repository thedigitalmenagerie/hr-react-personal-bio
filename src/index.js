import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import firebaseConfig from './helpers/apiKeys';
import './styles/index.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
