import React from 'react';
import PropTypes from 'prop-types';
import { animations } from 'react-animation';
import { AnimationWrapper } from 'react-hover-animation';
import homeLogo from '../assets/homeLogo.png';
import { signInUser } from '../helpers/Authorization';
import './vStyles/HomeView.scss';

export default function HomeView({ user }) {
  return (
    <div>
      <img id="homeLogo" src={homeLogo} style={{ animation: animations.fadeIn }} />
      {
            user !== null
            && <div id="authButtonsHome" style={{ animation: animations.fadeIn }} >
              {
                user
                  ? <AnimationWrapper></AnimationWrapper>
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
  user: PropTypes.any,
};
