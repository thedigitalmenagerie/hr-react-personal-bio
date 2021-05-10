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

const ProjectCards = ({
  firebaseKey,
  projectImage,
  projectName,
  projectLink,
  projectDate,
  projectAuthors,
  projectTech,
  setProjects
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
  <Card>
    <CardImg top width="100%" src={projectImage} alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">{projectName}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted"><a>{projectLink}</a></CardSubtitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted"><a>{projectDate}</a></CardSubtitle>
      <CardText>{projectAuthors}</CardText>
      <CardText>{projectTech}</CardText>
      <Button onClick={() => handleClick('delete')}>Delete Project</Button>
      <Button onClick={() => handleClick('edit')}>
      {editingProjects ? 'Close Form' : 'Edit Project'}
      </Button>
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
      />}
    </CardBody>
  </Card>
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
  setProjects: PropTypes.func
};

export default ProjectCards;
