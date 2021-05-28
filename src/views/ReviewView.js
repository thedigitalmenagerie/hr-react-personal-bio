import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { animations } from 'react-animation';
import { getReviews } from '../helpers/data/ReviewData';
import ReviewForm from '../forms/ReviewForm';
import ReviewCards from '../components/ReviewCardComponent';
import './vStyles/ReviewView.scss';

export default function ReviewView({ admin }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((response) => setReviews(response));
  }, []);

  return (
    <div className="reviewView" style={{ animation: animations.fadeIn }}>
      <div>
              <ReviewForm
                reviewFormTitle="Review Honey-Rae"
                reviews={reviews}
                setReviews={setReviews}
              />

      </div>
      {
          admin !== null
          && <ReviewCards
          admin={admin}
          reviews={reviews}
          setReviews={setReviews}
        />
        }

    </div>
  );
}

ReviewView.propTypes = {
  admin: PropTypes.any
};
