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

const ResumeCards = ({
  firebaseKey,
  resumeCompany,
  resumeLocation,
  resumeDate,
  resumeLength,
  resumeRole,
  resumeSkills,
  setResumes
}) => {
  const [editingResume, setEditingResume] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteResume(firebaseKey)
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
    <Card>
      <CardBody>
        <CardTitle tag="h5">{resumeCompany}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{resumeLocation}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{resumeDate}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{resumeLength}</CardSubtitle>
        <CardText>{resumeRole}</CardText>
        <CardText>{resumeSkills}</CardText>
        <Button onClick={() => handleClick('delete')}>Delete</Button>
        <Button onClick={() => handleClick('edit')}>
          {editingResume ? 'Close Form' : 'Edite Resume'}
        </Button>
          {editingResume && <ResumeForm
          resumeFormTitle='Edit Resume'
          setResumes={setResumes}
          firebaseKey={firebaseKey}
          resumeCompany={resumeCompany}
          resumeLocation={resumeLocation}
          resumeDate={resumeDate}
          resumeLength={resumeLength}
          resumeRole={resumeRole}
          resumeSkills={resumeSkills}
          />}
      </CardBody>
    </Card>
  );
};

ResumeCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  resumeCompany: PropTypes.string.isRequired,
  resumeLocation: PropTypes.string.isRequired,
  resumeDate: PropTypes.string.isRequired,
  resumeLength: PropTypes.string.isRequired,
  resumeRole: PropTypes.string.isRequired,
  resumeSkills: PropTypes.string.isRequired,
  setResumes: PropTypes.func
};

export default ResumeCards;
