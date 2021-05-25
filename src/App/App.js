import React, { useState, useEffect } from 'react';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBarCardComponent';
import Routes from '../helpers/Routes';

function App() {
  const [user, setUser] = useState(null);
  // const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
      // if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
      //   setAdmin(true);
      // } else if (admin || admin === null) {
      //   setAdmin(false);
      // }
    });
  }, []);

  return (
    <div className='App'>
      <>
      <Router>
        <NavBar user={user}/>
        <Routes user={user}/>
      </Router>
      </>

    </div>
  );
}

export default App;
