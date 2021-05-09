import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getContacts = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/contact.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const addContact = (contacts) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/contact.json`, contacts)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/contact/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Inquiry Submitted', contacts)));
    })
    .catch((error) => reject(error));
});

export { getContacts, addContact };
