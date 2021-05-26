import React from 'react';
import PropTypes from 'prop-types';
import { addReview, updateReview } from '../helpers/data/ReviewData';
import './fStyles/ReviewForm.scss';

const ReviewForm = ({
  reviewFormTitle,
  reviews,
  setReviews,
}) => {
  const handleProjectInputChange = (e) => {
    setReviews((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviews.firebasKey) {
      updateReview(reviews).then((reviewArray) => setReviews(reviewArray));
    } else {
      addReview(reviews).then((reviewArray) => setReviews(reviewArray));
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
            value={reviews.reviewerName}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Your Company: </label>
          <input
            name='reviewerCompany'
            type='text'
            placeholder='Your Company Name'
            value={reviews.reviewerCompany}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Your Role: </label>
          <input
            name='reviewerRole'
            type='text'
            placeholder='Your Role'
            value={reviews.reviewerRole}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Your Location: </label>
          <input
            name='reviewerLocation'
            type='text'
            placeholder='Date'
            value={reviews.reviewerLocation}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Review: </label>
          <input
            name='reviewerDescription'
            type='text'
            placeholder='Say somthing nice'
            value={reviews.reviewerDescription}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='reviewerDate'
            type='text'
            placeholder='Today&apos;s Date'
            value={reviews.reviewerDate}
            onChange={handleProjectInputChange}
          >
          </input>
          <button id="submitReview" type="submit">Add Review</button>
        </form>
      </div>
    </>
  );
};

ReviewForm.propTypes = {
  reviewFormTitle: PropTypes.string.isRequired,
  reviews: PropTypes.any,
  setReviews: PropTypes.func,
};

export default ReviewForm;
