import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { getResume } from '../helpers/data/ResumeData';
import ResumeForm from '../forms/ResumeForm';
import ResumeCards from '../components/ResumeCardComponent';

export default function ResumeView() {
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
        {!showAddResume
          ? <Button onClick={handleClick}>Add Resume</Button>
          : <div>
              <Button onClick={handleClick}>Close Form</Button>
              <ResumeForm
                resumeFormTitle="Add Resume"
                setResumes={setResumes}
              />
            </div>
        }
      </div>
      <hr/>
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
        />
      ))}
    </div>
  );
}
