import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addTechnologies, updateTech } from '../helpers/data/TechnologiesData';

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

  const handleProjectInputChange = (e) => {
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
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Name: </label>
          <input
            name='techName'
            type='text'
            placeholder='Name'
            value={tech.techName}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Description: </label>
          <input
            name='techDescription'
            type='text'
            placeholder='Description'
            value={tech.techDescription}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Image: </label>
          <input
            name='techImage'
            type='text'
            placeholder='Image URL'
            value={tech.techImage}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='techDate'
            type='text'
            placeholder='Date'
            value={tech.techDate}
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
  firebaseKey: PropTypes.string,
  techCategory: PropTypes.string,
  techName: PropTypes.string,
  techDescription: PropTypes.string,
  techImage: PropTypes.string,
  techDate: PropTypes.string,
};

export default TechForm;
