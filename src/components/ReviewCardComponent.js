import React, { useState } from 'react';
import {
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteReview } from '../helpers/data/ReviewData';
import ReviewForm from '../forms/ReviewForm';

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
    {reviews.map((review) => (
          <Card key={review.firebaseKey}>
      <CardBody>
        <CardTitle tag="h5">{review.reviewerName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{review.reviewerCompany}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{review.reviewerRole}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{review.reviewerLocation}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{review.reviewerDate}</CardSubtitle>
        <CardText>{review.reviewerDescription}</CardText>
        <Button onClick={() => handleClick(review.firebaseKey, 'delete')}>Delete Review</Button>
        <Button onClick={() => handleClick(review.firebaseKey, 'edit')}>
          {editingReview ? 'Close Form' : 'Edit Review'}
        </Button>
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
