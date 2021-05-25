import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import TechForm from '../forms/TechnologiesForm';
import { getTechnologies } from '../helpers/data/TechnologiesData';
import TechCards from '../components/TechnologiesCardComponent';

export default function TechnologiesView() {
  const [technologies, setTechnologies] = useState([]);
  const [showAddTechForm, setAddTechForm] = useState(false);

  const handleClick = () => {
    setAddTechForm((prevState) => !prevState);
  };

  useEffect(() => {
    getTechnologies().then((response) => setTechnologies(response));
  }, []);

  return (
    <div>
      <div>
        {!showAddTechForm
          ? <Button onClick={handleClick}>Add Tech</Button>
          : <div>
              <Button onClick={handleClick}>Close Form</Button>
              <TechForm
                technologiesFormTitle="Add Technology"
                setTechnologies={setTechnologies}
              />
            </div>
        }
      </div>
      {technologies.map((techInfo) => (
        <TechCards
        key={techInfo.firebaseKey}
        firebaseKey={techInfo.firebaseKey}
        techImage={techInfo.techImage}
        techName={techInfo.techName}
        techCategory={techInfo.techCategory}
        techDate={techInfo.techDate}
        techDescription={techInfo.techDescription}
        setTechnologies={setTechnologies}
        />
      ))}
    </div>
  );
}
