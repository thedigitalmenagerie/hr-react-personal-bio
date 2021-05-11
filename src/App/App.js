import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBarCardComponent';
import Routes from '../helpers/Routes';

function App() {
  return (
    <div className='App'>
      <>
      <Router>
        <NavBar/>
        <Routes />
      </Router>
      </>

    </div>
  );
}

export default App;
