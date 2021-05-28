import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { animations } from 'react-animation';
import { getBio } from '../helpers/data/BioData';
import BioCards from '../components/BioCardComponent';
import './vStyles/BioView.scss';

export default function BioView({
  admin,
  setAdmin,
  user,
  setUser,
}) {
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
          setAdmin={setAdmin}
          user={user}
          setUser={setUser}
          bios={bios}
          setBios={setBios}
        />
    </div>
  );
}

BioView.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};
