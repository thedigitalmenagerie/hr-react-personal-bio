import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const addContact = (contact) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/contact.json`, contact)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/contact/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Inquiry Submitted', contact)));
    })
    .catch((error) => reject(error));
});

export default addContact;
