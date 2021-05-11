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
import { deleteTech } from '../helpers/data/TechnologiesData';
import TechForm from '../forms/TechnologiesForm';

const TechCards = ({
  firebaseKey,
  techImage,
  techName,
  techCategory,
  techDate,
  techDescription,
  setTechnologies
}) => {
  const [editingTech, setEditingTech] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteTech(firebaseKey)
          .then((techArray) => setTechnologies(techArray));
        break;
      case 'edit':
        setEditingTech((prevState) => !prevState);
        break;
      default:
        console.warn('Nothing selected');
    }
  };
  return (
    <Card>
      <CardImg top width="100%" src={techImage} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{techName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{techCategory}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{techDate}</CardSubtitle>
        <CardText>{techDescription}</CardText>
        <Button onClick={() => handleClick('delete')}>Delete</Button>
        <Button onClick={() => handleClick('edit')}>
          {editingTech ? 'Close Form' : 'Edit Tech'}
        </Button>
          {editingTech && <TechForm
          technologiesFormTitle='Edit Tech'
          setTechnologies={setTechnologies}
          firebaseKey={firebaseKey}
          techImage={techImage}
          techCategory={techCategory}
          techDate={techDate}
          techDescription={techDescription}
          />}
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
