import React, { useState } from 'react';
import {
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import { AnimationWrapper } from 'react-hover-animation';
import PropTypes from 'prop-types';
import { deleteReview } from '../helpers/data/ReviewData';
import ReviewForm from '../forms/ReviewForm';
import './cstyles/ReviewComponent.scss';

const ReviewCards = ({
  admin,
  reviews,
  setReviews
}) => {
  const [editingReview, setEditingReview] = useState(false);

  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteReview(fbKey)
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
      <div className="reviewCardHolder"></div>
    {reviews.map((review) => (
          <Card id="reviewCards" key={review.firebaseKey}>
      <CardBody>
        <CardTitle tag="h5">{review.reviewerName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{review.reviewerCompany}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{review.reviewerRole}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{review.reviewerLocation}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{review.reviewerDate}</CardSubtitle>
        <CardText>{review.reviewerDescription}</CardText>
        <div id="authButtons">
                  <AnimationWrapper><Button id="deleteReview" onClick={() => handleClick(review.firebaseKey, 'delete')}>Delete Review</Button></AnimationWrapper>
        <AnimationWrapper><Button id="editReview" onClick={() => handleClick(review.firebaseKey, 'edit')}>
          {editingReview ? 'Close Form' : 'Edit Review'}
        </Button></AnimationWrapper>
        </div>
          {editingReview && <ReviewForm
          reviewFormTitle='Edit Review'
          setReviews={setReviews}
          admin={admin}
          reviews={reviews}
          />}
      </CardBody>
    </Card>
    ))}
    </div>
  );
};

ReviewCards.propTypes = {
  admin: PropTypes.any,
  reviews: PropTypes.any,
  setReviews: PropTypes.func
};

export default ReviewCards;
