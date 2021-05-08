import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const addProjects = (project) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/projects.json`, project)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/projects/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Project Added', project)));
    })
    .catch((error) => reject(error));
});

export default addProjects;
