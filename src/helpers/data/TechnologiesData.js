import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const addTechnologies = (tech) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/technologies.json`, tech)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/technologies/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Tech Added', tech)));
    })
    .catch((error) => reject(error));
});

export default addTechnologies;
