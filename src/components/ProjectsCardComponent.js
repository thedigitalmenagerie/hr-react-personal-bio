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

const ProjectCards = ({
  projectImage,
  projectName,
  projectLink,
  projectDate,
  projectAuthors,
  projectTech,
  handleClick
}) => (
  <Card>
  <CardImg top width="100%" src={projectImage} alt="Card image cap" />
  <CardBody>
    <CardTitle tag="h5">{projectName}</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted"><a>{projectLink}</a></CardSubtitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted"><a>{projectDate}</a></CardSubtitle>
    <CardText>{projectAuthors}</CardText>
    <CardText>{projectTech}</CardText>
    {handleClick ? <Button onClick={handleClick}></Button> : ''}
  </CardBody>
</Card>
);

ProjectCards.propTypes = {
  projectImage: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  projectDate: PropTypes.string.isRequired,
  projectAuthors: PropTypes.string.isRequired,
  projectTech: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default ProjectCards;
