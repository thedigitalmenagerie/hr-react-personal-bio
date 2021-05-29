import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { animations } from 'react-animation';
import { getReviews } from '../helpers/data/ReviewData';
import ReviewForm from '../forms/ReviewForm';
import ReviewCards from '../components/ReviewCardComponent';
import GitHub from '../assets/gitHub.png';
import Instagram from '../assets/instagram.png';
import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import './vStyles/ReviewView.scss';

export default function ReviewView({
  admin,
  setAdmin,
  user,
  setUser,
}) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((response) => setReviews(response));
  }, []);

  return (
    <div style={{ animation: animations.fadeIn }}>
      {
        user !== null
          && <div>
            { user
              ? <div>
                <ReviewForm
                  reviewFormTitle="Review Honey-Rae"
                  setReviews={setReviews}
                  admin={admin}
                  setAdmin={setAdmin}
                  user={user}
                  setUser={setUser}
                />
                  <div id="hiddenUserContent">
                  <div>Phone: (615)-956-1551</div>
                  <div>Email: honeyraeswan@gmail.com</div>
                  <div className="cardLinks">
                    <AnimationWrapper><a className="outerLink" href="https://github.com/thedigitalmenagerie" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={GitHub} alt="link icon"/></a></AnimationWrapper>
                    <AnimationWrapper><a className="outerLink" href="https://www.linkedin.com/in/honeyraeswan/" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={LinkedIn} alt="link icon"/></a></AnimationWrapper>
                    <AnimationWrapper><a className="outerLink" href="https://github.com/thedigitalmenagerie" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={Twitter} alt="link icon"/></a></AnimationWrapper>
                    <AnimationWrapper><a className="outerLink" href="https://github.com/thedigitalmenagerie" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={Instagram} alt="link icon"/></a></AnimationWrapper>
                  </div>
                </div>
                </div>
              : <div>
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
                      admin={admin}
                      setAdmin={setAdmin}
                      user={user}
                      setUser={setUser}
                    />
                  ))}</div>
            } </div>
          }
    </div>
  );
}

ReviewView.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};
