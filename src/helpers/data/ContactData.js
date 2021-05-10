import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getContacts = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/contact.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addContact = (contacts) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/contact.json`, contacts)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/contact/${response.data.name}.json`, body)
        .then(() => {
          getContacts().then((contactsArray) => resolve(contactsArray));
        });
    }).catch((error) => reject(error));
});

const deleteContacts = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${DBURL}/contacts/${firebaseKey}.json`)
    .then(() => getContacts().then((contactsArray) => resolve(contactsArray)))
    .catch((error) => reject(error));
});

export { getContacts, addContact, deleteContacts };
