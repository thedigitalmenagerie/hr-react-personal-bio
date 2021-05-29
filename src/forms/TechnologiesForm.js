import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { addTechnologies, updateTech } from '../helpers/data/TechnologiesData';
import './fStyles/TechnologiesForm.scss';

const TechForm = ({
  technologiesFormTitle,
  setTechnologies,
  firebaseKey,
  techCategory,
  techName,
  techDescription,
  techImage,
  techDate
}) => {
  const [tech, setTech] = useState({
    techCategory: techCategory || '',
    techName: techName || '',
    techDescription: techDescription || '',
    techImage: techImage || '',
    techDate: techDate || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setTech((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tech.firebaseKey) {
      updateTech(tech).then((techArray) => setTechnologies(techArray));
    } else {
      addTechnologies(tech).then((techArray) => setTechnologies(techArray));

      setTech({
        techCategory: '',
        techName: '',
        techDescription: '',
        techImage: '',
        techDate: '',
        firebaseKey: null
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
            value={tech.techCategory}
            onChange={handleInputChange}
          >
          </input>
          <label>Name: </label>
          <input
            name='techName'
            type='text'
            placeholder='Name'
            value={tech.techName}
            onChange={handleInputChange}
          >
          </input>
          <label>Description: </label>
          <input
            name='techDescription'
            type='text'
            placeholder='Description'
            value={tech.techDescription}
            onChange={handleInputChange}
          >
          </input>
          <label>Image: </label>
          <input
            name='techImage'
            type='text'
            placeholder='Image URL'
            value={tech.techImage}
            onChange={handleInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='techDate'
            type='text'
            placeholder='Date'
            value={tech.techDate}
            onChange={handleInputChange}
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
  firebaseKey: PropTypes.string,
  techCategory: PropTypes.string,
  techName: PropTypes.string,
  techDescription: PropTypes.string,
  techImage: PropTypes.string,
  techDate: PropTypes.string,
};

export default TechForm;
