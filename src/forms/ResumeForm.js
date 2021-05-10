import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addResume } from '../helpers/data/ResumeData';

const ResumeForm = ({ resumeFormTitle, setResumes }) => {
  const [resume, setResume] = useState({
    resumeCompany: '',
    resumeRole: '',
    resumeLocation: '',
    resumeDate: '',
    resumeLength: '',
    resumeSkills: '',
  });

  const handleProjectInputChange = (e) => {
    setResume((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addResume(resume).then((resumeArray) => setResumes(resumeArray));
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
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Role: </label>
          <input
            name='resumeRole'
            type='text'
            placeholder='Role'
            value={resume.resumeRole}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Location: </label>
          <input
            name='resumeLocation'
            type='text'
            placeholder='Location'
            value={resume.resumeLocation}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='resumeDate'
            type='text'
            placeholder='Date'
            value={resume.resumeDate}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Length: </label>
          <input
            name='resumeLength'
            type='text'
            placeholder='Length'
            value={resume.resumeLength}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Skills: </label>
          <input
            name='resumeSkills'
            type='text'
            placeholder='Skills'
            value={resume.resumeSkills}
            onChange={handleProjectInputChange}
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
  setResumes: PropTypes.func
};

export default ResumeForm;
