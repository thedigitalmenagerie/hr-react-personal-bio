import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addResume, updateResume } from '../helpers/data/ResumeData';
import './fStyles/ResumeForm.scss';

const ResumeForm = ({
  resumeFormTitle,
  setResumes,
  firebaseKey,
  resumeCompany,
  resumeRole,
  resumeLocation,
  resumeDate,
  resumeLength,
  resumeSkills
}) => {
  const [resume, setResume] = useState({
    resumeCompany: resumeCompany || '',
    resumeRole: resumeRole || '',
    resumeLocation: resumeLocation || '',
    resumeDate: resumeDate || '',
    resumeLength: resumeLength || '',
    resumeSkills: resumeSkills || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setResume((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resume.firebaseKey) {
      updateResume(resume).then((resumeArray) => setResumes(resumeArray));
    } else {
      addResume(resume).then((resumeArray) => setResumes(resumeArray));

      setResume({
        resumeCompany: '',
        resumeRole: '',
        resumeLocation: '',
        resumeDate: '',
        resumeLength: '',
        resumeSkills: '',
        firebaseKey: null
      });
    }
  };

  return (
    <>
      <div className="ResumeForm">
        <form
          id="addResumeForm"
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h3 id="addResumeFormTitle">{resumeFormTitle}</h3>
          <label>Company: </label>
          <input
            name='resumeCompany'
            type='text'
            placeholder='Company Name'
            value={resume.resumeCompany}
            onChange={handleInputChange}
          >
          </input>
          <label>Role: </label>
          <input
            name='resumeRole'
            type='text'
            placeholder='Role'
            value={resume.resumeRole}
            onChange={handleInputChange}
          >
          </input>
          <label>Location: </label>
          <input
            name='resumeLocation'
            type='text'
            placeholder='Location'
            value={resume.resumeLocation}
            onChange={handleInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='resumeDate'
            type='text'
            placeholder='Date'
            value={resume.resumeDate}
            onChange={handleInputChange}
          >
          </input>
          <label>Length: </label>
          <input
            name='resumeLength'
            type='text'
            placeholder='Length'
            value={resume.resumeLength}
            onChange={handleInputChange}
          >
          </input>
          <label>Skills: </label>
          <input
            name='resumeSkills'
            type='text'
            placeholder='Skills'
            value={resume.resumeSkills}
            onChange={handleInputChange}
          >
          </input>
          <button type="submit">Add Resume</button>
        </form>
      </div>
    </>
  );
};

ResumeForm.propTypes = {
  resumeFormTitle: PropTypes.string.isRequired,
  setResumes: PropTypes.func,
  firebaseKey: PropTypes.string,
  resumeCompany: PropTypes.string,
  resumeRole: PropTypes.string,
  resumeLocation: PropTypes.string,
  resumeDate: PropTypes.string,
  resumeLength: PropTypes.string,
  resumeSkills: PropTypes.string
};

export default ResumeForm;
