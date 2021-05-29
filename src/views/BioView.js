import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { animations } from 'react-animation';
import { AnimationWrapper } from 'react-hover-animation';
import { getBio } from '../helpers/data/BioData';
import BioForm from '../forms/BioForm';
import BioCards from '../components/BioCardComponent';
import './vStyles/BioView.scss';

export default function BioView({
  admin,
  setAdmin,
  user,
  setUser,
}) {
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
            { admin
              ? <div>
                  {!showAddBioForm
                    ? <AnimationWrapper><button id="addBio" onClick={handleClick}>Add Bio</button></AnimationWrapper>
                    : <div>
                    <AnimationWrapper><button id="closeForm" onClick={handleClick}>Close Form</button></AnimationWrapper>
                    <BioForm
                      bioFormTitle="Add Bio"
                      setBios={setBios}
                      admin={admin}
                      setAdmin={setAdmin}
                      user={user}
                      setUser={setUser}
                    />
                  </div>
                  }
                </div>
              : <div></div>

            } </div>
          }
      </div>
      {bios.map((bioInfo) => (
        <BioCards
          key={bioInfo.firebaseKey}
          firebaseKey={bioInfo.firebaseKey}
          bioImage={bioInfo.bioImage}
          bioName={bioInfo.bioName}
          bioTitle={bioInfo.bioTitle}
          bioLocation={bioInfo.bioLocation}
          bioDescription={bioInfo.bioDescription}
          bioDate={bioInfo.bioDate}
          setBios={setBios}
          admin={admin}
          setAdmin={setAdmin}
          user={user}
          setUser={setUser}
        />
      ))}
    </div>
  );
}

BioView.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};
