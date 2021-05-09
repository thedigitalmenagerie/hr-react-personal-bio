import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/technologies.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const addTechnologies = (techs) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/technologies.json`, techs)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/technologies/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Tech Added', techs)));
    })
    .catch((error) => reject(error));
});

export { getTechnologies, addTechnologies };
