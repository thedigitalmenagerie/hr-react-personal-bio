import React, { useState } from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';
import GitHub from '../assets/gitHub.png';
import Instagram from '../assets/instagram.png';
import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import { deleteBio } from '../helpers/data/BioData';
import BioForm from '../forms/BioForm';
import './cstyles/BioComponent.scss';

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
  const [editingBios, setEditingBios] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteBio(firebaseKey)
          .then((bioArray) => setBios(bioArray));
        break;
      case 'edit':
        setEditingBios((prevState) => !prevState);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  return (
    <div className="bioContainer">
      <Card className= "bioLeft">
        <div className="row no-gutters">
          <div className="col-auto">
      <CardImg className="bioImg" src={bioImage} alt="Honey-Rae Swan" />
          <CardTitle tag="h5">{bioName}</CardTitle>
          <CardText>{bioLocation}</CardText>
            <CardLink className="outerLink" href="https://github.com/thedigitalmenagerie"><CardImg className="linkImg" src={GitHub} ></CardImg></CardLink>
            <CardLink className="outerLink" href="https://www.linkedin.com/in/honeyraeswan/"><CardImg className="linkImg" src={LinkedIn} ></CardImg></CardLink>
            <CardLink className="outerLink" href=""><CardImg className="linkImg" href="" src={Twitter} ></CardImg></CardLink>
            <CardLink className="outerLink" href=""><CardImg className="linkImg" href="" src-={Instagram} ></CardImg></CardLink>
          <CardFooter>Last Updated: {bioDate}</CardFooter>
          </div>
          <div className="col">
            {editingBios && <BioForm
              bioFormTitle='Edit Bio'
              firebaseKey={firebaseKey}
              bioImage={bioImage}
              bioName={bioName}
              bioTitle={bioTitle}
              bioLocation={bioLocation}
              bioDescription={bioDescription}
              bioDate={bioDate}
              setBios={setBios}
            />}
          <CardSubtitle tag="h6" className="mb-2 text-muted">{bioTitle}</CardSubtitle>
          <CardText >{bioDescription}</CardText>
          <Button onClick={() => handleClick('delete')}>Delete Bio</Button>
          <Button onClick={() => handleClick('edit')}>
            {editingBios ? 'Close Form' : 'Edit Bio'}
          </Button>
        </div>
        </div>
      </Card>
    </div>
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
