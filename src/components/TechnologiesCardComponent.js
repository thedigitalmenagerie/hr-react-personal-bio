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
import { AnimationWrapper } from 'react-hover-animation';
import PropTypes from 'prop-types';
import { deleteTech } from '../helpers/data/TechnologiesData';
import TechForm from '../forms/TechnologiesForm';
import './cstyles/TechnologiesComponent.scss';

const TechCards = ({
  admin,
  technologies,
  setTechnologies
}) => {
  const [editingTech, setEditingTech] = useState(false);

  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteTech(fbKey)
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
    <div className="techContainer">
      <div className="techCardHolder">
              {technologies.map((tech) => (
      <Card id="techCards" key={tech.firebaseKey}>
      <CardImg top width="100%" src={tech.techImage} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{tech.techName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{tech.techCategory}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{tech.techDate}</CardSubtitle>
        <CardText>{tech.techDescription}</CardText>
          {editingTech && <TechForm
          technologiesFormTitle='Edit Tech'
          setTechnologies={setTechnologies}
          admin={admin}
          technologies={technologies}
          />}
                {
              admin !== null
              && <div>
                        <AnimationWrapper><Button id="deleteTech" onClick={() => handleClick(tech.firebaseKey, 'delete')}>Delete</Button></AnimationWrapper>
        <AnimationWrapper><Button id="deleteTech" onClick={() => handleClick(tech.firebaseKey, 'edit')}>
          {editingTech ? 'Close Form' : 'Edit Tech'}
        </Button></AnimationWrapper>
              </div>
              }
      </CardBody>
    </Card>
              ))}
      </div>

    </div>
  );
};

TechCards.propTypes = {
  admin: PropTypes.any,
  technologies: PropTypes.any,
  setTechnologies: PropTypes.func
};

export default TechCards;
