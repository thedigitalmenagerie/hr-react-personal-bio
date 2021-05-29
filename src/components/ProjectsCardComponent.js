import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { deleteProjects } from '../helpers/data/ProjectsData';
import ProjectsForm from '../forms/ProjectsForm';
import './cstyles/ProjectsComponent.scss';

const ProjectCards = ({
  firebaseKey,
  projectImage,
  projectName,
  projectLink,
  projectDate,
  projectAuthors,
  projectTech,
  setProjects,
  admin,
  setAdmin,
  user,
  setUser,
}) => {
  const [editingProjects, setEditingProjects] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProjects(firebaseKey)
          .then((projectsArray) => setProjects(projectsArray));
        break;
      case 'edit':
        setEditingProjects((prevState) => !prevState);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  return (
    <div className="projectsContainer">
      <div className="projectCardHolder">
        <Card className="projectCards">
          <CardImg top width="100%" src={projectImage} alt="Card image cap" />
          <CardBody>
          <CardTitle tag="h5">{projectName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><a>{projectLink}</a></CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><a>{projectDate}</a></CardSubtitle>
          <CardText>{projectAuthors}</CardText>
          <CardText>{projectTech}</CardText>
          {
            admin !== null
              && <div id="hiddenAdminContent">
                { admin
                  ? <div>
                      <div id="adminButtons">
                        <AnimationWrapper><button id="deleteProject" onClick={() => handleClick('delete')}>Delete Project</button></AnimationWrapper>
                        <AnimationWrapper><button id="closeForm" onClick={() => handleClick('edit')}>
                          {editingProjects ? 'Close Form' : 'Edit Project'}
                        </button></AnimationWrapper>
                          {editingProjects && <ProjectsForm
                            projectsFormTitle='Edit Project'
                            setProjects={setProjects}
                            firebaseKey={firebaseKey}
                            projectImage={projectImage}
                            projectName={projectName}
                            projectLink={projectLink}
                            projectDate={projectDate}
                            projectAuthors={projectAuthors}
                            projectTech={projectTech}
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

ProjectCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  projectDate: PropTypes.string.isRequired,
  projectAuthors: PropTypes.string.isRequired,
  projectTech: PropTypes.string.isRequired,
  setProjects: PropTypes.func,
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};

export default ProjectCards;
