import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { getBio } from '../helpers/data/BioData';
import BioForm from '../forms/BioForm';
import BioCards from '../components/BioCardComponent';

export default function BioView() {
  const [bios, setBios] = useState([]);
  const [showAddBioForm, setShowAddBioForm] = useState(false);

  const handleClick = () => {
    setShowAddBioForm((prevState) => !prevState);
  };

  useEffect(() => {
    getBio().then((response) => setBios(response));
  }, []);
  return (
    <div>
      <div>
        {!showAddBioForm
          ? <Button onClick={handleClick}>Add Bio</Button>
          : <div>
              <Button onClick={handleClick}>Close Form</Button>
              <BioForm
                bioFormTitle="Add Bio"
                setBios={setBios}
              />
            </div>
        }
      </div>
      <hr/>
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
        />
      ))}
    </div>
  );
}
