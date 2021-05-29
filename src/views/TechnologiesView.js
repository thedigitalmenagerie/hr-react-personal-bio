import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { animations } from 'react-animation';
import TechForm from '../forms/TechnologiesForm';
import { getTechnologies } from '../helpers/data/TechnologiesData';
import TechCards from '../components/TechnologiesCardComponent';
import './vStyles/TechnologiesView.scss';

export default function TechnologiesView({
  admin,
  setAdmin,
  user,
  setUser,
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
    <div style={{ animation: animations.fadeIn }}>
      <div>
      {
        admin !== null
          && <div>
            { admin
              ? <div>
                {!showAddTechForm
                  ? <AnimationWrapper><button id="addTech" onClick={handleClick}>Add Tech</button></AnimationWrapper>
                  : <div>
                      <AnimationWrapper><button id="closeForm" onClick={handleClick}>Close Form</button></AnimationWrapper>
                        <TechForm
                          technologiesFormTitle="Add Technology"
                          setTechnologies={setTechnologies}
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
        admin={admin}
        setAdmin={setAdmin}
        user={user}
        setUser={setUser}
        />
      ))}
    </div>
  );
}

TechnologiesView.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};
