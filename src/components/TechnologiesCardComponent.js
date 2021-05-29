import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { deleteTech } from '../helpers/data/TechnologiesData';
import TechForm from '../forms/TechnologiesForm';
import './cstyles/TechnologiesComponent.scss';

const TechCards = ({
  firebaseKey,
  techImage,
  techName,
  techCategory,
  techDate,
  techDescription,
  setTechnologies,
  admin,
  setAdmin,
  user,
  setUser,
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
    <div className="techContainer">
      <div className="techCardHolder">
            <Card id="techCards">
      <CardImg top width="100%" src={techImage} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{techName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{techCategory}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{techDate}</CardSubtitle>
        <CardText>{techDescription}</CardText>
        {
              admin !== null
                && <div id="hiddenAdminContent">
                  { admin
                    ? <div>
                        <div id="adminButtons">
                        <AnimationWrapper><button id="deleteTech" onClick={() => handleClick('delete')}>Delete</button></AnimationWrapper>
                        <AnimationWrapper><button id="editTech" onClick={() => handleClick('edit')}>
                          {editingTech ? 'Close Form' : 'Edit Tech'}
                        </button></AnimationWrapper>
                          {editingTech && <TechForm
                            technologiesFormTitle='Edit Tech'
                            setTechnologies={setTechnologies}
                            firebaseKey={firebaseKey}
                            techImage={techImage}
                            techCategory={techCategory}
                            techDate={techDate}
                            techDescription={techDescription}
                            admin={admin}
                            setAdmin={setAdmin}
                            user={user}
                            setUser={setUser}
                          />}
                          </div>
                          </div>
                    : <div></div>
                  } </div>
              }
      </CardBody>
    </Card>
      </div>
    </div>

  );
};

TechCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  techImage: PropTypes.string.isRequired,
  techName: PropTypes.string.isRequired,
  techCategory: PropTypes.string.isRequired,
  techDate: PropTypes.string.isRequired,
  techDescription: PropTypes.string.isRequired,
  setTechnologies: PropTypes.func,
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};

export default TechCards;
