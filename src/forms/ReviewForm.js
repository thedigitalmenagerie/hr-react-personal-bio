import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addReview, updateReview } from '../helpers/data/ReviewData';
import './fStyles/ReviewForm.scss';

const ReviewForm = ({
  reviewFormTitle,
  setReviews,
  firebasKey,
  reviewerName,
  reviewerCompany,
  reviewerRole,
  reviewerLocation,
  reviewerDescription,
  reviewerDate
}) => {
  const [review, setReview] = useState({
    reviewerName: reviewerName || '',
    reviewerCompany: reviewerCompany || '',
    reviewerRole: reviewerRole || '',
    reviewerLocation: reviewerLocation || '',
    reviewerDescription: reviewerDescription || '',
    reviewerDate: reviewerDate || '',
    firebasKey: firebasKey || null
  });

  const handleInputChange = (e) => {
    setReview((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.firebasKey) {
      updateReview(review).then((reviewArray) => setReviews(reviewArray));
    } else {
      addReview(review).then((reviewArray) => setReviews(reviewArray));

      setReview({
        reviewerName: '',
        reviewerCompany: '',
        reviewerRole: '',
        reviewerLocation: '',
        reviewerDescription: '',
        reviewerDate: '',
        firebasKey: null
      });
    }
  };

  return (
    <>
      <div className="ReviewForm">
        <form
          id="addReviewForm"
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h3 id="addReviewFormTitle">{reviewFormTitle}</h3>
          <label>Your Name: </label>
          <input
            name='reviewerName'
            type='text'
            placeholder='Your Name'
            value={review.reviewerName}
            onChange={handleInputChange}
          >
          </input>
          <label>Your Company: </label>
          <input
            name='reviewerCompany'
            type='text'
            placeholder='Your Company Name'
            value={review.reviewerCompany}
            onChange={handleInputChange}
          >
          </input>
          <label>Your Role: </label>
          <input
            name='reviewerRole'
            type='text'
            placeholder='Your Role'
            value={review.reviewerRole}
            onChange={handleInputChange}
          >
          </input>
          <label>Your Location: </label>
          <input
            name='reviewerLocation'
            type='text'
            placeholder='Date'
            value={review.reviewerLocation}
            onChange={handleInputChange}
          >
          </input>
          <label>Review: </label>
          <input
            name='reviewerDescription'
            type='text'
            placeholder='Say somthing nice'
            value={review.reviewerDescription}
            onChange={handleInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='reviewerDate'
            type='text'
            placeholder='Today&apos;s Date'
            value={review.reviewerDate}
            onChange={handleInputChange}
          >
          </input>
          <button type="submit">Add Review</button>
        </form>
      </div>
    </>
  );
};

ReviewForm.propTypes = {
  reviewFormTitle: PropTypes.string.isRequired,
  setReviews: PropTypes.func,
  firebasKey: PropTypes.string,
  reviewerName: PropTypes.string,
  reviewerCompany: PropTypes.string,
  reviewerRole: PropTypes.string,
  reviewerLocation: PropTypes.string,
  reviewerDescription: PropTypes.string,
  reviewerDate: PropTypes.string
};

export default ReviewForm;
