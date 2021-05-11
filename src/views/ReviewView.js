import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { getReviews } from '../helpers/data/ReviewData';
import ReviewForm from '../forms/ReviewForm';
import ReviewCards from '../components/ReviewCardComponent';

export default function ReviewView() {
  const [reviews, setReviews] = useState([]);
  const [showAddReviewForm, setAddReviewForm] = useState(false);

  const handleClick = () => {
    setAddReviewForm((prevState) => !prevState);
  };

  useEffect(() => {
    getReviews().then((response) => setReviews(response));
  }, []);

  return (
    <div>
      <div>
        {!showAddReviewForm
          ? <Button onClick={handleClick}>Add Review</Button>
          : <div>
              <Button onClick={handleClick}>Close Form</Button>
              <ReviewForm
                reviewFormTitle="Review Honey-Rae"
                setReviews={setReviews}
              />
            </div>
        }
      </div>
      <hr/>
      {reviews.map((reviewInfo) => (
        <ReviewCards
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
