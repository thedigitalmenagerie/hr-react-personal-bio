import React from 'react';
import PropTypes from 'prop-types';
import { animations } from 'react-animation';
import { AnimationWrapper } from 'react-hover-animation';
import homeLogo from '../assets/homeLogo.png';
import { signInUser } from '../helpers/Authorization';
import './vStyles/HomeView.scss';

export default function HomeView({
  admin,
  user,
}) {
  return (
    <div>
      <img id="homeLogo" src={homeLogo} style={{ animation: animations.fadeIn }} />
      {
        (user || admin) !== null
          && <div id="authButtonsHome" style={{ animation: animations.fadeIn }} >
            {
              (user || admin)
                ? <AnimationWrapper><div id="welcome">Nice to meet ya!</div></AnimationWrapper>
                : <AnimationWrapper>
                    <div id="instructions" style={{ animation: animations.fadeIn }} >To Contact Honey-Rae or submit a recommendation, please sign in below:</div>
                    <button id="signIn" onClick={signInUser}> Sign In </button>
                  </AnimationWrapper>
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
