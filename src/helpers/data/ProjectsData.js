import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addProjects = (projects) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/projects.json`, projects)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/projects/${response.data.name}.json`, body)
        .then(() => {
          getProjects().then((projectsArray) => resolve(projectsArray));
        });
    }).catch((error) => reject(error));
});

const deleteProjects = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${DBURL}/projects/${firebaseKey}.json`)
    .then(() => getProjects().then((projectsArray) => resolve(projectsArray)))
    .catch((error) => reject(error));
});

const updateProjects = (projects) => new Promise((resolve, reject) => {
  axios.patch(`${DBURL}/projects/${projects.firebaseKey}.json`, projects)
    .then(() => getProjects().then(resolve))
    .catch((error) => reject(error));
});

export {
  getProjects,
  addProjects,
  deleteProjects,
  updateProjects
};
