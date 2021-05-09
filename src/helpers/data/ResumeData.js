import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getResume = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/resume.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const addResume = (resumes) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/resume.json`, resumes)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/resume/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Resume Added', resumes)));
    })
    .catch((error) => reject(error));
});

export { getResume, addResume };
