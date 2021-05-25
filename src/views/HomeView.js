import React from 'react';
import { animations } from 'react-animation';
import homeLogo from '../assets/homeLogo.png';
import './vStyles/HomeView.scss';

export default function HomeView() {
  return (
    <div>
      <img id="homeLogo" src={homeLogo} style={{ animation: animations.fadeIn }} />
    </div>
  );
}
