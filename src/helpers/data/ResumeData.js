import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const addResume = (resume) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/resume.json`, resume)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/resume/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Resume Added', resume)));
    })
    .catch((error) => reject(error));
});

export default addResume;
