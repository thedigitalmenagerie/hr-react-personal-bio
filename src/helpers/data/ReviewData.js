import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getReviews = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/reviews.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addReview = (reviews) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/reviews.json`, reviews)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/reviews/${response.data.name}.json`, body)
        .then(() => {
          getReviews().then((reviewArray) => resolve(reviewArray));
        });
    }).catch((error) => reject(error));
});

const deleteReview = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${DBURL}/projects/${firebaseKey}.json`)
    .then(() => getReviews().then((reviewArray) => resolve(reviewArray)))
    .catch((error) => reject(error));
});

export { getReviews, addReview, deleteReview };
