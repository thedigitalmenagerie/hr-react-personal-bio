import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
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
  setBios,
  admin,
  setAdmin,
  user,
  setUser,
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
      <Card className= "bioLeft" key={firebaseKey}>
        <div className="row no-gutters">
          <div className="col-5">
            <CardImg className="bioImg" src={bioImage} alt="Honey-Rae Swan" />
          </div>
          <div className="col-5 right">
              <CardTitle tag="h5" className="name">{bioName}</CardTitle>
              <CardText id="area">{bioLocation}</CardText>
              <CardSubtitle tag="h6" className="mb-2">{bioTitle}</CardSubtitle>
              <CardText id="description">{bioDescription}</CardText>
              <CardText id="area">Last Updated: {bioDate}</CardText>
              {
                user !== null
                  && <div id="hiddenUserContent">
                    {user
                      ? <div>
                          <div>Phone: (615)-956-1551</div>
                          <div>Email: honeyraeswan@gmail.com</div>
                        </div>
                      : <div>Log in to see contact info!</div>
                    }
                  </div>
              }
              <div className="cardLinks">
                <a className="outerLink" href="https://github.com/thedigitalmenagerie" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={GitHub} alt="link icon"/></a>
                <a className="outerLink" href="https://www.linkedin.com/in/honeyraeswan/" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={LinkedIn} alt="link icon"/></a>
                <a className="outerLink" href="https://github.com/thedigitalmenagerie" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={Twitter} alt="link icon"/></a>
                <a className="outerLink" href="https://github.com/thedigitalmenagerie" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={Instagram} alt="link icon"/></a>
              </div>
              {
                admin !== null
                  && <div id="hiddenAdminContent">
                    { admin
                      ? <div>
                          <div id="adminButtons">
                            <AnimationWrapper>
                              <button id="deleteBio" onClick={() => handleClick('delete')}>Delete Bio</button>
                            </AnimationWrapper>
                            <AnimationWrapper>
                              <button id="editBio" onClick={() => handleClick('edit')}>
                                {editingBios ? 'Close Form' : 'Edit Bio'}
                              </button>
                            </AnimationWrapper>
                          </div>
                          <div>
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
  setBios: PropTypes.func,
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};

export default BioCards;
