import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { animations } from 'react-animation';
import { AnimationWrapper } from 'react-hover-animation';
import TechForm from '../forms/TechnologiesForm';
import { getTechnologies } from '../helpers/data/TechnologiesData';
import TechCards from '../components/TechnologiesCardComponent';
import './vStyles/TechnologiesView.scss';

export default function TechnologiesView({
  admin,
  setAdmin
}) {
  const [technologies, setTechnologies] = useState([]);
  const [showAddTechForm, setAddTechForm] = useState(false);

  const handleClick = () => {
    setAddTechForm((prevState) => !prevState);
  };

  useEffect(() => {
    getTechnologies().then((response) => setTechnologies(response));
  }, []);

  return (
    <div id="techView" style={{ animation: animations.fadeIn }}>
      <div>
      {
          admin !== null
          && <div>
            { admin
              ? <div>
                  {!showAddTechForm
                    ? <AnimationWrapper><Button id="addTech" onClick={handleClick}>Add Tech</Button></AnimationWrapper>
                    : <div>
                        <AnimationWrapper><Button id="closeForm" onClick={handleClick}>Close Form</Button></AnimationWrapper>
                        <TechForm
                          technologiesFormTitle="Add Technology"
                          admin={admin}
                          technologies={technologies}
                          setTechnologies={setTechnologies}
                        />
                      </div>
                  }
                </div>
              : <div></div>
            }
            </div>
        }
      </div>
        <TechCards
        admin={admin}
        setAdmin={setAdmin}
        technologies={technologies}
        setTechnologies={setTechnologies}
        />
    </div>
  );
}

TechnologiesView.propTypes = {
  admin: PropTypes.any,
  setAdmin: PropTypes.any
};
