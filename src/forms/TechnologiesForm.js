import React from 'react';
import PropTypes from 'prop-types';
import { addTechnologies, updateTech } from '../helpers/data/TechnologiesData';

const TechForm = ({
  technologiesFormTitle,
  setTechnologies,
  technologies,
}) => {
  const handleProjectInputChange = (e) => {
    setTechnologies((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (technologies.firebaseKey) {
      updateTech(technologies).then((techArray) => setTechnologies(techArray));
    } else {
      addTechnologies(technologies).then((techArray) => setTechnologies(techArray));
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
          <button type="submit">Add Technology</button>
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
