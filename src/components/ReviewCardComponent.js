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
  firebaseKey,
  reviewerName,
  reviewerCompany,
  reviewerRole,
  reviewerLocation,
  reviewerDate,
  reviewerDescription,
  setReviews
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
    <Card>
      <CardBody>
        <CardTitle tag="h5">{reviewerName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerCompany}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerRole}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerLocation}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{reviewerDate}</CardSubtitle>
        <CardText>{reviewerDescription}</CardText>
        <Button onClick={() => handleClick('delete')}>Delete Review</Button>
        <Button onClick={() => handleClick('edit')}>
          {editingReview ? 'Close Form' : 'Edit Review'}
        </Button>
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
          />}
      </CardBody>
    </Card>
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
  setReviews: PropTypes.func
};

export default ReviewCards;
