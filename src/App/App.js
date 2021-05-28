import React, { useState, useEffect } from 'react';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBarCardComponent';
import Routes from '../helpers/Routes';

function App() {
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        const adminInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        console.warn(adminInfoObj);
        console.warn(authed.uid);
        setAdmin(adminInfoObj);
        setUser(false);
      } else if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
        setAdmin(false);
      } else if ((user || user === null) || (admin || admin === null)) {
        setUser(false);
        setAdmin(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <>
      <Router>
        <NavBar
        admin={admin}
        user={user}
        />
        <Routes
        admin={admin}
        user={user}
        />
      </Router>
      </>

    </div>
  );
}

export default App;
