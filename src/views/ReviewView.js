import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { animations } from 'react-animation';
import { getReviews } from '../helpers/data/ReviewData';
import ReviewForm from '../forms/ReviewForm';
import ReviewCards from '../components/ReviewCardComponent';
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
    <div className="reviewView" style={{ animation: animations.fadeIn }}>
      <div className="innerContainer">
      {
          user !== null
          && <div>
            { user
              ? <ReviewForm
              reviewFormTitle="Review Honey-Rae"
              reviews={reviews}
              setReviews={setReviews}
              user={user}
              setUser={setUser}
              admin={admin}
              setAdmin={setAdmin}
            />
              : <div></div>

            }
            </div>
        }
      {
          admin !== null
          && <div>
            { admin
              ? <ReviewCards
              reviews={reviews}
              setReviews={setReviews}
              user={user}
              setUser={setUser}
              admin={admin}
              setAdmin={setAdmin}
            />
              : <div></div>

            }
            </div>
        }
      </div>
    </div>
  );
}

ReviewView.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.any,
  admin: PropTypes.any,
  setAdmin: PropTypes.any,
};
