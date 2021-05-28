import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { addTechnologies, updateTech } from '../helpers/data/TechnologiesData';
import './fStyles/TechnologiesForm.scss';

const TechForm = ({
  technologiesFormTitle,
  setTechnologies,
  technologies,
}) => {
  const [tech, setTech] = useState({
    techCategory: technologies.techCategory || '',
    techDate: technologies.techDate || '',
    techDescription: technologies.techDescription || '',
    techImage: technologies.techImage || '',
    techName: technologies.techName || '',
    firebaseKey: technologies.firebaseKey || null,
  });

  const handleProjectInputChange = (e) => {
    setTechnologies((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (technologies.firebaseKey) {
      updateTech(tech).then((techArray) => setTechnologies(techArray));
    } else {
      addTechnologies(tech).then((techArray) => setTechnologies(techArray));

      setTech({
        techCategory: '',
        techDate: '',
        techDescription: '',
        techImage: '',
        techName: '',
        firebaseKey: null,
      });
    }
  };

  return (
    <>
      <div className="TechForm">
        <form
          id="addTechForm"
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h3 id="addTechFormTitle">{technologiesFormTitle}</h3>
          <label>Category: </label>
          <input
            name='techCategory'
            type='text'
            placeholder='Category'
            value={technologies.techCategory}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Name: </label>
          <input
            name='techName'
            type='text'
            placeholder='Name'
            value={technologies.techName}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Description: </label>
          <input
            name='techDescription'
            type='text'
            placeholder='Description'
            value={technologies.techDescription}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Image: </label>
          <input
            name='techImage'
            type='text'
            placeholder='Image URL'
            value={technologies.techImage}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='techDate'
            type='text'
            placeholder='Date'
            value={technologies.techDate}
            onChange={handleProjectInputChange}
          >
          </input>
          <AnimationWrapper><button type="submit">Add Technology</button></AnimationWrapper>
        </form>
      </div>
    </>
  );
};

TechForm.propTypes = {
  technologiesFormTitle: PropTypes.string.isRequired,
  setTechnologies: PropTypes.func,
  technologies: PropTypes.any,
  admin: PropTypes.any
};

export default TechForm;
