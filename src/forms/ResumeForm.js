import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { addResume, updateResume } from '../helpers/data/ResumeData';
import './fStyles/ResumeForm.scss';

const ResumeForm = ({
  resumeFormTitle,
  resumes,
  setResumes,
}) => {
  const [resume, setResume] = useState({
    resumeCompany: resumes.resumeCompany || '',
    resumeDate: resumes.resumeDate || '',
    resumeLength: resumes.resumeLength || '',
    resumeLocation: resumes.resumeLocation || '',
    resumeRole: resumes.resumeRole || '',
    resumeSkills: resumes.resumeSkills || '',
    firebaseKey: resumes.firebaseKey || null,
  });

  const handleProjectInputChange = (e) => {
    setResumes((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resumes.firebaseKey) {
      updateResume(resume).then((resumeArray) => setResumes(resumeArray));
    } else {
      addResume(resume).then((resumeArray) => setResumes(resumeArray));

      setResume({
        resumeCompany: '',
        resumeDate: '',
        resumeLength: '',
        resumeLocation: '',
        resumeRole: '',
        resumeSkills: '',
        firebaseKey: null,
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
            value={resumes.resumeCompany}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Role: </label>
          <input
            name='resumeRole'
            type='text'
            placeholder='Role'
            value={resumes.resumeRole}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Location: </label>
          <input
            name='resumeLocation'
            type='text'
            placeholder='Location'
            value={resumes.resumeLocation}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='resumeDate'
            type='text'
            placeholder='Date'
            value={resumes.resumeDate}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Length: </label>
          <input
            name='resumeLength'
            type='text'
            placeholder='Length'
            value={resumes.resumeLength}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Skills: </label>
          <input
            name='resumeSkills'
            type='text'
            placeholder='Skills'
            value={resumes.resumeSkills}
            onChange={handleProjectInputChange}
          >
          </input>
          <AnimationWrapper><button id="submitResume" type="submit">Add Resume</button></AnimationWrapper>
        </form>
      </div>
    </>
  );
};

ResumeForm.propTypes = {
  resumeFormTitle: PropTypes.string.isRequired,
  admin: PropTypes.any,
  resumes: PropTypes.any,
  setResumes: PropTypes.func,
};

export default ResumeForm;
