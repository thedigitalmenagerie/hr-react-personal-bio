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
import { deleteTech } from '../helpers/data/TechnologiesData';

const TechCards = ({
  firebaseKey,
  techImage,
  techName,
  techCategory,
  techDate,
  techDescription,
  setTechnologies
}) => {
  const handleClick = () => {
    deleteTech(firebaseKey)
      .then((techArray) => setTechnologies(techArray));
  };
  return (
    <Card>
      <CardImg top width="100%" src={techImage} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{techName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{techCategory}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{techDate}</CardSubtitle>
        <CardText>{techDescription}</CardText>
        <Button onClick={handleClick}>Button</Button>
      </CardBody>
    </Card>
  );
};

TechCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  techImage: PropTypes.string.isRequired,
  techName: PropTypes.string.isRequired,
  techCategory: PropTypes.string.isRequired,
  techDate: PropTypes.string.isRequired,
  techDescription: PropTypes.string.isRequired,
  setTechnologies: PropTypes.func
};

export default TechCards;
