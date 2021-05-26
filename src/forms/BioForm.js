import React from 'react';
import PropTypes from 'prop-types';
import { addBio, updateBio } from '../helpers/data/BioData';
import './fStyles/BioForm.scss';

const BioForm = ({
  bio,
  setBio,
  bioFormTitle
}) => {
  const handleProjectInputChange = (e) => {
    setBio((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bio.firebaseKey) {
      updateBio(bio).then((bioArray) => setBio(bioArray));
    } else {
      addBio(bio).then((bioArray) => setBio(bioArray));
    }
  };

  return (
    <>
      <div className="BioForm">
        <form
          id="addBioForm"
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h3 id="addBioFormTitle">{bioFormTitle}</h3>
          <label>Name: </label>
          <input
            name='bioName'
            type='text'
            placeholder='Bio Name'
            value={bio.bioName}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Image: </label>
          <input
            name='bioImage'
            type='text'
            placeholder='Bio Image URL'
            value={bio.bioImage}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Location: </label>
          <input
            name='bioLocation'
            type='text'
            placeholder='Bio Location'
            value={bio.bioLocation}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='bioDate'
            type='text'
            placeholder='Bio Date'
            value={bio.bioDate}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Title: </label>
          <input
            name='bioTitle'
            type='text'
            placeholder='Bio Title'
            value={bio.bioTitle}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Description: </label>
          <input
            name='bioDescription'
            type='text'
            placeholder='Bio Description'
            value={bio.bioDescription}
            onChange={handleProjectInputChange}
          >
          </input>
          <button id="submitBio" className="sm" type="submit">Add Bio</button>
        </form>
      </div>
    </>
  );
};

BioForm.propTypes = {
  bio: PropTypes.object,
  setBio: PropTypes.func,
  bioFormTitle: PropTypes.any
};

export default BioForm;
