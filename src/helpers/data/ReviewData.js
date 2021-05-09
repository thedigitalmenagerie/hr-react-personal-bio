import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getReviews = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/reviews.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const addReview = (reviews) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/reviews.json`, reviews)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/resume/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Review Added', reviews)));
    })
    .catch((error) => reject(error));
});

export { getReviews, addReview };
