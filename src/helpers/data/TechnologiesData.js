import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/technologies.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addTechnologies = (techs) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/technologies.json`, techs)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/technologies/${response.data.name}.json`, body)
        .then(() => {
          getTechnologies().then((techArray) => resolve(techArray));
        });
    }).catch((error) => reject(error));
});

const deleteTech = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${DBURL}/technologies/${firebaseKey}.json`)
    .then(() => getTechnologies().then((techArray) => resolve(techArray)))
    .catch((error) => reject(error));
});

const updateTech = (techs) => new Promise((resolve, reject) => {
  axios.patch(`${DBURL}/technologies/${techs.firebaseKey}.json`, techs)
    .then(() => getTechnologies().then(resolve))
    .catch((error) => reject(error));
});

export {
  getTechnologies,
  addTechnologies,
  deleteTech,
  updateTech
};
