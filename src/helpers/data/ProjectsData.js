import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/projects.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const addProjects = (projects) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/projects.json`, projects)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/projects/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Project Added', projects)));
    })
    .catch((error) => reject(error));
});

export { getProjects, addProjects };
