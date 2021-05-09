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

const ContactCards = ({
  contactName,
  contactEmail,
  contactPhone,
  contactDate,
  contactReason,
  handleClick
}) => (
  <Card>
  <CardBody>
    <CardTitle tag="h5">{contactName}</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{contactEmail}</CardSubtitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{contactPhone}</CardSubtitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{contactDate}</CardSubtitle>
    <CardText>{contactReason}</CardText>
    <Button onClick={handleClick}>Button</Button>
  </CardBody>
</Card>
);

ContactCards.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  contactPhone: PropTypes.string.isRequired,
  contactDate: PropTypes.string.isRequired,
  contactReason: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default ContactCards;
