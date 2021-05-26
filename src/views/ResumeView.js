import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { getResume } from '../helpers/data/ResumeData';
import ResumeForm from '../forms/ResumeForm';
import ResumeCards from '../components/ResumeCardComponent';

export default function ResumeView({ admin }) {
  const [resumes, setResumes] = useState([]);
  const [showAddResume, setAddResume] = useState(false);

  const handleClick = () => {
    setAddResume((prevState) => !prevState);
  };

  useEffect(() => {
    getResume().then((response) => setResumes((response)));
  }, []);
  return (
    <div>
      <div>
      {
          admin !== null
          && <div>
            {!showAddResume
              ? <Button onClick={handleClick}>Add Resume</Button>
              : <div>
              <Button onClick={handleClick}>Close Form</Button>
              <ResumeForm
                resumeFormTitle="Add Resume"
                admin={admin}
                resumes={resumes}
                setResumes={setResumes}
              />
            </div>
        }
          </div>
        }

      </div>
        <ResumeCards
          admin={admin}
          resumes={resumes}
          setResumes={setResumes}
        />
    </div>
  );
}

ResumeView.propTypes = {
  admin: PropTypes.any
};
