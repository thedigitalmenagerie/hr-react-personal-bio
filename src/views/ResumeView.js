import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { animations } from 'react-animation';
import { AnimationWrapper } from 'react-hover-animation';
import { getResume } from '../helpers/data/ResumeData';
import ResumeForm from '../forms/ResumeForm';
import ResumeCards from '../components/ResumeCardComponent';
import './vStyles/ResumeView.scss';

export default function ResumeView({
  admin,
  setAdmin
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
    <div id="resumeView" style={{ animation: animations.fadeIn }}>
      <div>
      {
          admin !== null
          && <div>
            { admin
              ? <div>
                  {!showAddResume
                    ? <AnimationWrapper><Button id="addResume" onClick={handleClick}>Add Resume</Button></AnimationWrapper>
                    : <div>
                      <AnimationWrapper><Button id="closeForm" onClick={handleClick}>Close Form</Button></AnimationWrapper>
                      <ResumeForm
                        resumeFormTitle="Add Resume"
                        admin={admin}
                        setAdmin={setAdmin}
                        resumes={resumes}
                        setResumes={setResumes}
                      />
                    </div>
                  }
                </div>
              : <div></div>
            }
            </div>
        }

      </div>
        <ResumeCards
          admin={admin}
          setAdmin={setAdmin}
          resumes={resumes}
          setResumes={setResumes}
        />
    </div>
  );
}

ResumeView.propTypes = {
  admin: PropTypes.any,
  setAdmin: PropTypes.any
};
