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
import { deleteBio } from '../helpers/data/BioData';
import BioForm from '../forms/BioForm';

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
    <Card>
      <CardImg top width="100%" src={bioImage} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{bioName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{bioTitle}</CardSubtitle>
        <CardText>{bioLocation}</CardText>
        <CardText>{bioDescription}</CardText>
        <CardText>{bioDate}</CardText>
        <Button onClick={() => handleClick('delete')}>Delete Bio</Button>
        <Button onClick={() => handleClick('edit')}>
          {editingBios ? 'Close Form' : 'Edit Bio'}
        </Button>
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
