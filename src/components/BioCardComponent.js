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
  admin,
  bios,
  setBios,
}) => {
  const [editingBios, setEditingBios] = useState(false);

  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteBio(fbKey)
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
      {bios.map((bio) => (
        <Card className= "bioLeft" key={bio.firebaseKey}>
        <div className="row no-gutters">
          <div className="col-auto">
      <CardImg className="bioImg" src={bio.bioImage} alt="Honey-Rae Swan" />
          <CardTitle tag="h5">{bio.bioName}</CardTitle>
          <CardText>{bio.bioLocation}</CardText>
            <CardLink className="outerLink" href="https://github.com/thedigitalmenagerie"><CardImg className="linkImg" src={GitHub} ></CardImg></CardLink>
            <CardLink className="outerLink" href="https://www.linkedin.com/in/honeyraeswan/"><CardImg className="linkImg" src={LinkedIn} ></CardImg></CardLink>
            <CardLink className="outerLink" href=""><CardImg className="linkImg" href="" src={Twitter} ></CardImg></CardLink>
            <CardLink className="outerLink" href=""><CardImg className="linkImg" href="" src-={Instagram} ></CardImg></CardLink>
          <CardFooter>Last Updated: {bio.bioDate}</CardFooter>
          </div>
          <div className="col">
            {editingBios && <BioForm
              bioFormTitle='Edit Bio'
              bio={bio}
              setBios={setBios}
            />}
          <CardSubtitle tag="h6" className="mb-2">{bio.bioTitle}</CardSubtitle>
          <CardText >{bio.bioDescription}</CardText>
            {
              admin !== null
              && <div>
                <Button id="deleteBio" onClick={() => handleClick(bio.firebaseKey, 'delete')}>Delete Bio</Button>
                <Button id="editBio" onClick={() => handleClick(bio.firebaseKey, 'edit')}>
                  {editingBios ? 'Close Form' : 'Edit Bio'}
                </Button>
              </div>
            }
          </div>
        </div>
      </Card>
      ))
      }
    </div>
  );
};

BioCards.propTypes = {
  admin: PropTypes.any,
  bios: PropTypes.array,
  setBios: PropTypes.func
};

export default BioCards;
