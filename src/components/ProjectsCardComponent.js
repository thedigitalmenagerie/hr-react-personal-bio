import React from 'react';
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
  const handleClick = () => {
    deleteProjects(firebaseKey)
      .then((projectsArray) => setProjects(projectsArray));
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
      <Button onClick={handleClick}>Delete Project</Button>
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
