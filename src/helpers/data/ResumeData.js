import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getResume = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/resume.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addResume = (resumes) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/resume.json`, resumes)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/resume/${response.data.name}.json`, body)
        .then(() => {
          getResume().then((resumeArray) => resolve(resumeArray));
        });
    }).catch((error) => reject(error));
});

const deleteResume = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${DBURL}/resume/${firebaseKey}.json`)
    .then(() => getResume().then((resumeArray) => resolve(resumeArray)))
    .catch((error) => reject(error));
});

const updateResume = (resumes) => new Promise((resolve, reject) => {
  axios.patch(`${DBURL}/resume/${resumes.firebaseKey}.json`, resumes)
    .then(() => getResume().then(resolve))
    .catch((error) => reject(error));
});

export {
  getResume,
  addResume,
  deleteResume,
  updateResume
};
