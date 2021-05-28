import React, { useState, useEffect } from 'react';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBarCardComponent';
import Routes from '../helpers/Routes';

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
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
      } else if (admin || admin === null) {
        setUser(false);
        setAdmin(false);
      } else if (user || user === null) {
        setAdmin(false);
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <>
      <Router>
        <NavBar
        user={user}
        admin={admin}
        />
        <Routes
        user={user}
        admin={admin}
        />
      </Router>
      </>

    </div>
  );
}

export default App;
