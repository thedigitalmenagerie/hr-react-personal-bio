import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { animations } from 'react-animation';
import { AnimationWrapper } from 'react-hover-animation';
import { getBio } from '../helpers/data/BioData';
import BioForm from '../forms/BioForm';
import BioCards from '../components/BioCardComponent';
import './vStyles/BioView.scss';

export default function BioView({ admin, user }) {
  const [bios, setBios] = useState([]);
  const [showAddBioForm, setShowAddBioForm] = useState(false);

  const handleClick = () => {
    setShowAddBioForm((prevState) => !prevState);
  };

  useEffect(() => {
    getBio().then((response) => setBios(response));
  }, []);
  return (
    <div className="bioView" style={{ animation: animations.fadeIn }}>
      <div className="innerContainer">
        {
          admin !== null
          && <div>
            {!showAddBioForm
              ? <AnimationWrapper><Button id="addBio" onClick={handleClick}>Add Bio</Button></AnimationWrapper>
              : <div>
              <AnimationWrapper><Button id="closeForm" onClick={handleClick}>Close Form</Button></AnimationWrapper>
              <BioForm
                className="bioForm"
                bioFormTitle="Add Bio"
                setBios={setBios}
                bios={bios}
                />
              </div>
            }
          </div>
        }
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
