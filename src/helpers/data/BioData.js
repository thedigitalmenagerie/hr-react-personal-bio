import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getBio = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/bio.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const addBio = (bios) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/bio.json`, bios)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/bio/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Bio Added', bios)));
    })
    .catch((error) => reject(error));
});

export { getBio, addBio };
