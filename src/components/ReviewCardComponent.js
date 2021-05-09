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

const ReviewCards = ({
  reviewerName,
  reviewerCompany,
  reviewerRole,
  reviewerLocation,
  reviewerDate,
  reviewerDescription,
  handleClick
}) => (
  <Card>
  <CardBody>
    <CardTitle tag="h5">{reviewerName}</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerCompany}</CardSubtitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerRole}</CardSubtitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerLocation}</CardSubtitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerDate}</CardSubtitle>
    <CardText>{reviewerDescription}</CardText>
    <Button onClick={handleClick}>Button</Button>
  </CardBody>
</Card>
);

ReviewCards.propTypes = {
  reviewerName: PropTypes.string.isRequired,
  reviewerCompany: PropTypes.string.isRequired,
  reviewerRole: PropTypes.string.isRequired,
  reviewerLocation: PropTypes.string.isRequired,
  reviewerDate: PropTypes.string.isRequired,
  reviewerDescription: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default ReviewCards;
