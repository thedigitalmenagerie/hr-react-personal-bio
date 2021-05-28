import React, { useState } from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import GitHub from '../assets/gitHub.png';
import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import { deleteBio } from '../helpers/data/BioData';
import BioForm from '../forms/BioForm';
import './cstyles/BioComponent.scss';

const BioCards = ({
  user,
  admin,
  bios,
  setBios,
}) => {
  const [editingBios, setEditingBios] = useState(false);
  console.warn(user);
  console.warn(admin);

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
          <div className="col-5">
      <CardImg className="bioImg" src={bio.bioImage} alt="Honey-Rae Swan" />
          </div>
          <div className="col-5 right">
            {editingBios && <BioForm
              bioFormTitle='Edit Bio'
              bio={bio}
              setBios={setBios}
            />}
          <CardTitle tag="h2" className="name">{bio.bioName}</CardTitle>
          <CardText id="area">{bio.bioLocation}</CardText>
          <CardSubtitle tag="h6" className="mb-2">{bio.bioTitle}</CardSubtitle>
          <CardText id="description" >{bio.bioDescription}</CardText>
          {
              user !== null
              && <div>
                <div id="phone">Phone: (615)-956-1551</div>
                <div id="email">Email: honeyraeswan@gmail.com</div>
              </div>
            }
          <div id="link"><AnimationWrapper><CardLink className="outerLink" href="https://github.com/thedigitalmenagerie"><CardImg className="linkImg" src={GitHub} ></CardImg></CardLink></AnimationWrapper>
            <AnimationWrapper><CardLink className="outerLink" href="https://www.linkedin.com/in/honeyraeswan/"><CardImg className="linkImg" src={LinkedIn} ></CardImg></CardLink></AnimationWrapper>
            <AnimationWrapper><CardLink className="outerLink" href=""><CardImg className="linkImg" href="" src={Twitter} ></CardImg></CardLink></AnimationWrapper></div>
            {
              admin !== null
              && <div>
                <AnimationWrapper><Button id="deleteBio" onClick={() => handleClick(bio.firebaseKey, 'delete')}>Delete Bio</Button></AnimationWrapper>
                <AnimationWrapper><Button id="editBio" onClick={() => handleClick(bio.firebaseKey, 'edit')}>
                  {editingBios ? 'Close Form' : 'Edit Bio'}
                </Button></AnimationWrapper>
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
  user: PropTypes.any,
  admin: PropTypes.any,
  bios: PropTypes.array,
  setBios: PropTypes.func
};

export default BioCards;
