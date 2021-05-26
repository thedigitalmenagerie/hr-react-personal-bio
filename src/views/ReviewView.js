import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { getReviews } from '../helpers/data/ReviewData';
import ReviewForm from '../forms/ReviewForm';
import ReviewCards from '../components/ReviewCardComponent';

export default function ReviewView({
  setReviews,
  user
}) {
  const [review, setReview] = useState([]);
  const [showAddReviewForm, setAddReviewForm] = useState(false);

  const handleClick = () => {
    setAddReviewForm((prevState) => !prevState);
  };

  useEffect(() => {
    getReviews().then((response) => setReview(response));
  }, []);

  return (
    <div>
      <div>
        {!showAddReviewForm
          ? <Button onClick={handleClick}>Add Review</Button>
          : <div>
              <Button onClick={handleClick}>Close Form</Button>
              <ReviewForm
                user={user}
                reviewFormTitle="Review Honey-Rae"
                setReviews={setReviews}
              />
            </div>
        }
      </div>
      {review.map((reviewInfo) => (
        <ReviewCards
          user={user}
          key={reviewInfo.firebaseKey}
          firebaseKey={reviewInfo.firebaseKey}
          reviewerName={reviewInfo.reviewerName}
          reviewerCompany={reviewInfo.reviewerCompany}
          reviewerRole={reviewInfo.reviewerRole}
          reviewerLocation={reviewInfo.reviewerLocation}
          reviewerDate={reviewInfo.reviewerDate}
          reviewerDescription={reviewInfo.reviewerDescription}
          setReviews={setReviews}
        />
      ))}
    </div>
  );
}

ReviewView.propTypes = {
  reviews: PropTypes.any,
  setReviews: PropTypes.any,
  user: PropTypes.any
};
