import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { animations } from 'react-animation';
import { getBio } from '../helpers/data/BioData';
import BioCards from '../components/BioCardComponent';
import './vStyles/BioView.scss';

export default function BioView({ admin, user }) {
  const [bios, setBios] = useState([]);

  useEffect(() => {
    getBio().then((response) => setBios(response));
  }, []);
  return (
    <div className="bioView" style={{ animation: animations.fadeIn }}>
      <div className="innerContainer">
      </div>
        <BioCards
          admin={admin}
          user={user}
          bios={bios}
          setBios={setBios}
        />
    </div>
  );
}

BioView.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any
};
