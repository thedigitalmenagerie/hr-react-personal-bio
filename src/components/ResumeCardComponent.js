import React from 'react';
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
  const handleClick = () => {
    deleteResume(firebaseKey)
      .then((resumeArray) => setResumes(resumeArray));
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
        <Button onClick={handleClick}>Button</Button>
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
