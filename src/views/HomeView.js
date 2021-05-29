import React from 'react';
import PropTypes from 'prop-types';
import homeLogo from '../assets/homeLogo.png';
import { signInUser } from '../helpers/Authorization';
import './vStyles/HomeView.scss';

export default function HomeView({
  admin,
  user,
}) {
  return (
    <div>
      <img id="homeLogo" src={homeLogo} />
      {
        (user || admin) !== null
          && <div id="authButtonsHome">
            {
              (user || admin)
                ? <div id="welcome">Nice to meet ya!</div>
                : <div><div id="instructions">To Contact Honey-Rae or submit a recommendation, please sign in below:</div>
                    <button id="signIn" onClick={signInUser}> Sign In </button></div>
              }
            </div>
          }
    </div>
  );
}

HomeView.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any,
};
