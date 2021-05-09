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

const TechCards = ({
  techImage,
  techName,
  techCategory,
  techDate,
  techDescription,
  handleClick
}) => (
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

TechCards.propTypes = {
  techImage: PropTypes.string.isRequired,
  techName: PropTypes.string.isRequired,
  techCategory: PropTypes.string.isRequired,
  techDate: PropTypes.string.isRequired,
  techDescription: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default TechCards;
