import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getBio = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/bio.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addBio = (bios) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/bio.json`, bios)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/bio/${response.data.name}.json`, body)
        .then(() => {
          getBio().then((bioArray) => resolve(bioArray));
        });
    }).catch((error) => reject(error));
});

const deleteBio = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${DBURL}/bio/${firebaseKey}.json`)
    .then(() => getBio().then((bioArray) => resolve(bioArray)))
    .catch((error) => reject(error));
});

const updateBio = (bios) => new Promise((resolve, reject) => {
  axios.patch(`${DBURL}/bio/${bios.firebaseKey}.json`, bios)
    .then(() => getBio().then(resolve))
    .catch((error) => reject(error));
});

export {
  getBio,
  addBio,
  deleteBio,
  updateBio
};
