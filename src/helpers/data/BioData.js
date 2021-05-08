import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const addBio = (bio) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/bio.json`, bio)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/bio/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Bio Added', bio)));
    })
    .catch((error) => reject(error));
});

export default addBio;
