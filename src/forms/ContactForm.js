import React from 'react';
import PropTypes from 'prop-types';
import { addContact, updateContacts } from '../helpers/data/ContactData';
import './fStyles/ContactForm.scss';

const ContactForm = ({
  contacts,
  setContacts,
  contactFormTitle
}) => {
  const handleProjectInputChange = (e) => {
    setContacts((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.firebaseKey) {
      updateContacts(contacts).then((contactsArray) => setContacts(contactsArray));
    } else {
      addContact(contacts).then((contactsArray) => setContacts(contactsArray));
    }
  };

  return (
    <>
      <div className="ContactForm">
        <form
          id="addContactForm"
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h3 id="addContactFormTitle">{contactFormTitle}</h3>
          <label>Name: </label>
          <input
            name='contactName'
            type='text'
            placeholder='Your Name'
            value={contacts.contactName}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Email: </label>
          <input
            name='contactEmail'
            type='text'
            placeholder='Your email'
            value={contacts.contactEmail}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Phone: </label>
          <input
            name='contactPhone'
            type='text'
            placeholder='Contact Phone'
            value={contacts.contactPhone}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='contactDate'
            type='text'
            placeholder='Date'
            value={contacts.contactDate}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Reason: </label>
          <input
            name='contactReason'
            type='text'
            placeholder='Reason'
            value={contacts.contactReason}
            onChange={handleProjectInputChange}
          >
          </input>
          <button id="submitContact" type="submit">Submit Inquiry</button>
        </form>
      </div>
    </>
  );
};

ContactForm.propTypes = {
  contactFormTitle: PropTypes.string.isRequired,
  contacts: PropTypes.any,
  setContacts: PropTypes.func,
};

export default ContactForm;
