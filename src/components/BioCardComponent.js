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
import { deleteBio } from '../helpers/data/BioData';

const BioCards = ({
  firebaseKey,
  bioImage,
  bioName,
  bioTitle,
  bioLocation,
  bioDescription,
  bioDate,
  setBios
}) => {
  const handleClick = () => {
    deleteBio(firebaseKey)
      .then((bioArray) => setBios(bioArray));
  };
  return (
    <Card>
      <CardImg top width="100%" src={bioImage} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{bioName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{bioTitle}</CardSubtitle>
        <CardText>{bioLocation}</CardText>
        <CardText>{bioDescription}</CardText>
        <CardText>{bioDate}</CardText>
        <Button onClick={handleClick}></Button>
      </CardBody>
    </Card>
  );
};

BioCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  bioImage: PropTypes.string.isRequired,
  bioName: PropTypes.string.isRequired,
  bioTitle: PropTypes.string.isRequired,
  bioLocation: PropTypes.string.isRequired,
  bioDescription: PropTypes.string.isRequired,
  bioDate: PropTypes.string.isRequired,
  setBios: PropTypes.func
};

export default BioCards;
