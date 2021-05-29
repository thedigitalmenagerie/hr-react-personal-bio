import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { deleteReview } from '../helpers/data/ReviewData';
import ReviewForm from '../forms/ReviewForm';
import './cstyles/ReviewComponents.scss';

const ReviewCards = ({
  firebaseKey,
  reviewerName,
  reviewerCompany,
  reviewerRole,
  reviewerLocation,
  reviewerDate,
  reviewerDescription,
  setReviews,
  admin,
  setAdmin,
  user,
  setUser,
}) => {
  const [editingReview, setEditingReview] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteReview(firebaseKey)
          .then((reviewArray) => setReviews(reviewArray));
        break;
      case 'edit':
        setEditingReview((prevState) => !prevState);
        break;
      default:
        console.warn('Nothing selected');
    }
  };
  return (
    <div className="reviewContainer">
      <div className="reviewCardHolder">
            <Card id="reviewCards">
      <CardBody>
        <CardTitle tag="h5">{reviewerName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerCompany}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerRole}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerLocation}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerDate}</CardSubtitle>
        <CardText>{reviewerDescription}</CardText>
        {
              admin !== null
                && <div id="hiddenAdminContent">
                  { admin
                    ? <div>
                        <div id="adminButtons">
                        <AnimationWrapper><button id="deleteReview"onClick={() => handleClick('delete')}>Delete Review</button></AnimationWrapper>
                        <AnimationWrapper><button id="editReview" onClick={() => handleClick('edit')}>
                          {editingReview ? 'Close Form' : 'Edit Review'}
                        </button></AnimationWrapper>
                          {editingReview && <ReviewForm
                            reviewFormTitle='Edit Review'
                            setReviews={setReviews}
                            firebaseKey={firebaseKey}
                            reviewerName={reviewerName}
                            reviewerCompany={reviewerCompany}
                            reviewerRole={reviewerRole}
                            reviewerLocation={reviewerLocation}
                            reviewerDate={reviewerDate}
                            reviewerDescription={reviewerDescription}
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

ReviewCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  reviewerName: PropTypes.string.isRequired,
  reviewerCompany: PropTypes.string.isRequired,
  reviewerRole: PropTypes.string.isRequired,
  reviewerLocation: PropTypes.string.isRequired,
  reviewerDate: PropTypes.string.isRequired,
  reviewerDescription: PropTypes.string.isRequired,
  setReviews: PropTypes.func,
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};

export default ReviewCards;
