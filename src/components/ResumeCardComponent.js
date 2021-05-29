import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { deleteResume } from '../helpers/data/ResumeData';
import ResumeForm from '../forms/ResumeForm';
import './cstyles/ResumeComponent.scss';

const ResumeCards = ({
  firebaseKey,
  resumeCompany,
  resumeLocation,
  resumeDate,
  resumeLength,
  resumeRole,
  resumeSkills,
  setResumes,
  admin,
  setAdmin,
  user,
  setUser,
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
    <div className="resumeContainer">
      <div className="resumeCardHolder">
        <Card id="resumeCards">
      <CardBody>
        <CardTitle tag="h5">{resumeCompany}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{resumeLocation}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{resumeDate}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{resumeLength}</CardSubtitle>
        <CardText>{resumeRole}</CardText>
        <CardText>{resumeSkills}</CardText>
        {
            admin !== null
              && <div id="hiddenAdminContent">
                { admin
                  ? <div>
                      <div id="adminButtons">
                      <AnimationWrapper><button id="deleteResume" onClick={() => handleClick('delete')}>Delete</button></AnimationWrapper>
        <AnimationWrapper><button id="editResume" onClick={() => handleClick('edit')}>
          {editingResume ? 'Close Form' : 'Edite Resume'}
        </button></AnimationWrapper>
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
          admin={admin}
          setAdmin={setAdmin}
          user={user}
          setUser={setUser}
          />}
                      </div>
                     </div>
                  : <div></div>

                } </div>
              }
      </CardBody>
    </Card>
      </div>
    </div>

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
  setResumes: PropTypes.func,
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};

export default ResumeCards;
