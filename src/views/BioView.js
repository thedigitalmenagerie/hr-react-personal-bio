import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { getBio } from '../helpers/data/BioData';
import BioForm from '../forms/BioForm';
import BioCards from '../components/BioCardComponent';
import './vStyles/BioView.scss';

export default function BioView({ admin }) {
  const [bios, setBios] = useState([]);
  const [showAddBioForm, setShowAddBioForm] = useState(false);

  const handleClick = () => {
    setShowAddBioForm((prevState) => !prevState);
  };

  useEffect(() => {
    getBio().then((response) => setBios(response));
  }, []);
  return (
    <div className="bioView">
      <div className="innerContainer">
        {
          admin !== null
          && <div>
            {!showAddBioForm
              ? <Button id="addBio" onClick={handleClick}>Add Bio</Button>
              : <div>
              <Button id="closeForm" onClick={handleClick}>Close Form</Button>
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
          bios={bios}
          setBios={setBios}
        />
    </div>
  );
}

BioView.propTypes = {
  admin: PropTypes.any
};
