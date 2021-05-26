import React, { useState } from 'react';
import {
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteResume } from '../helpers/data/ResumeData';
import ResumeForm from '../forms/ResumeForm';
import './cstyles/ResumeComponent.scss';

const ResumeCards = ({
  admin,
  resumes,
  setResumes
}) => {
  const [editingResume, setEditingResume] = useState(false);

  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteResume(fbKey)
          .then((resumeArray) => setResumes(resumeArray));
        break;
      case 'edit':
        setEditingResume((prevState) => !prevState);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  return (
    <div className="resumeContainer">
      <div className="resumeCardHolder">
        {resumes?.map((resume) => (
              <Card id="resumeCard" key={resume.firebaseKey}>
      <CardBody>
        <CardTitle id="cardTitle" tag="h5">{resume.resumeCompany}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{resume.resumeLocation}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{resume.resumeDate}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{resume.resumeLength}</CardSubtitle>
        <CardText>{resume.resumeRole}</CardText>
        <CardText>{resume.resumeSkills}</CardText>

          {editingResume && <ResumeForm
          resumeFormTitle='Edit Resume'
          admin={admin}
          resumes={resumes}
          setResumes={setResumes}
          />}
                {
              admin !== null
              && <div>
                        <Button onClick={() => handleClick(resume.firebaseKey, 'delete')}>Delete</Button>
        <Button onClick={() => handleClick(resume.firebaseKey, 'edit')}>
          {editingResume ? 'Close Form' : 'Edite Resume'}
        </Button>
              </div>
              }
      </CardBody>
    </Card>
        ))}

      </div>
    </div>

  );
};

ResumeCards.propTypes = {
  admin: PropTypes.any,
  resumes: PropTypes.any,
  setResumes: PropTypes.func
};

export default ResumeCards;
