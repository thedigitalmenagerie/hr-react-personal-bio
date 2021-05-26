import React, { useState } from 'react';
import {
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProjects } from '../helpers/data/ProjectsData';
import ProjectsForm from '../forms/ProjectsForm';
import './cstyles/ProjectsComponent.scss';

const ProjectCards = ({
  admin,
  projects,
  setProjects
}) => {
  const [editingProjects, setEditingProjects] = useState(false);

  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteProjects(fbKey)
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
              {projects?.map((project) => (
            <Card className="projectCards" key={project.firebaseKey}>
    <CardImg top width="100%" src={project.projectImage} alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">{project.projectName}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted"><a>{project.projectLink}</a></CardSubtitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted"><a>{project.projectDate}</a></CardSubtitle>
      <CardText>{project.projectAuthors}</CardText>
      <CardText>{project.projectTech}</CardText>
        {editingProjects && <ProjectsForm
                    projectsFormTitle='Edit Project'
                    admin={admin}
                    projects={projects}
                    setProjects={setProjects}
                    />
                  }
      {
              admin !== null
              && <div>
                <Button id="deleteProject" onClick={() => handleClick(project.firebaseKey, 'delete')}>Delete Project</Button>
                <Button id="editProject" onClick={() => handleClick(project.firebaseKey, 'edit')}>
                {editingProjects ? 'Close Form' : 'Edit Project'}
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

ProjectCards.propTypes = {
  admin: PropTypes.any,
  projects: PropTypes.any,
  setProjects: PropTypes.func
};

export default ProjectCards;
