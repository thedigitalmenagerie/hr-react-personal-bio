import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { animations } from 'react-animation';
import { getResume } from '../helpers/data/ResumeData';
import ResumeForm from '../forms/ResumeForm';
import ResumeCards from '../components/ResumeCardComponent';
import './vStyles/ResumeView.scss';

export default function ResumeView({
  admin,
  setAdmin,
  user,
  setUser,
}) {
  const [resumes, setResumes] = useState([]);
  const [showAddResume, setAddResume] = useState(false);

  const handleClick = () => {
    setAddResume((prevState) => !prevState);
  };

  useEffect(() => {
    getResume().then((response) => setResumes((response)));
  }, []);
  return (
    <div className="resumeView" style={{ animation: animations.fadeIn }}>
      <div>
      {
        admin !== null
          && <div>
            { admin
              ? <div>
                {!showAddResume
                  ? <AnimationWrapper><button id="addResume" onClick={handleClick}>Add Resume</button></AnimationWrapper>
                  : <div>
                      <AnimationWrapper><button id="closeForm" onClick={handleClick}>Close Form</button></AnimationWrapper>
                      <ResumeForm
                      resumeFormTitle="Add Resume"
                      setResumes={setResumes}
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
      {resumes.map((resumeInfo) => (
        <ResumeCards
          key={resumeInfo.firebaseKey}
          firebaseKey={resumeInfo.firebaseKey}
          resumeCompany={resumeInfo.resumeCompany}
          resumeLocation={resumeInfo.resumeLocation}
          resumeDate={resumeInfo.resumeDate}
          resumeLength={resumeInfo.resumeLength}
          resumeRole={resumeInfo.resumeLength}
          resumeSkills={resumeInfo.resumeSkills}
          setResumes={setResumes}
          admin={admin}
          setAdmin={setAdmin}
          user={user}
          setUser={setUser}
        />
      ))}
    </div>
  );
}

ResumeView.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};
