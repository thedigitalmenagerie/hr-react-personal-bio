import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { addReview, updateReview } from '../helpers/data/ReviewData';
import './fStyles/ReviewForm.scss';

const ReviewForm = ({
  reviewFormTitle,
  reviews,
  setReviews,
}) => {
  const [review, setReview] = useState({
    reviewerCompany: reviews.reviewerCompany || '',
    reviewerDate: reviews.reviewerDate || '',
    reviewerDescription: reviews.reviewerDescription || '',
    reviewerLocation: reviews.reviewerLocation || '',
    reviewerName: reviews.reviewerName || '',
    reviewerRole: reviews.reviewerRole || '',
    firebaseKey: reviews.firebaseKey || null,
  });

  const handleProjectInputChange = (e) => {
    setReviews((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviews.firebasKey) {
      updateReview(review).then((reviewArray) => setReviews(reviewArray));
    } else {
      addReview(review).then((reviewArray) => setReviews(reviewArray));

      setReview({
        resumeCompany: '',
        resumeDate: '',
        resumeLength: '',
        resumeLocation: '',
        resumeRole: '',
        resumeSkills: '',
        firebaseKey: null,
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
          <AnimationWrapper><button id="submitReview" type="submit">Add Review</button></AnimationWrapper>
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
