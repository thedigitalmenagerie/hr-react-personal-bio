import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import TechForm from '../forms/TechnologiesForm';
import { getTechnologies } from '../helpers/data/TechnologiesData';
import TechCards from '../components/TechnologiesCardComponent';

export default function TechnologiesView({ admin }) {
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
      {
          admin !== null
          && <div>
         {!showAddTechForm
           ? <Button onClick={handleClick}>Add Tech</Button>
           : <div>
              <Button onClick={handleClick}>Close Form</Button>
              <TechForm
                technologiesFormTitle="Add Technology"
                admin={admin}
                technologies={technologies}
                setTechnologies={setTechnologies}
              />
            </div>
        }
          </div>
        }
      </div>
        <TechCards
        admin={admin}
        technologies={technologies}
        setTechnologies={setTechnologies}
        />
    </div>
  );
}

TechnologiesView.propTypes = {
  admin: PropTypes.any
};
