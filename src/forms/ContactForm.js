import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addContact, updateContacts } from '../helpers/data/ContactData';

const ContactForm = ({
  contactFormTitle,
  setContacts,
  firebaseKey,
  contactName,
  contactEmail,
  contactPhone,
  contactDate,
  contactReason
}) => {
  const [contact, setContact] = useState({
    contactName: contactName || '',
    contactEmail: contactEmail || '',
    contactPhone: contactPhone || '',
    contactDate: contactDate || '',
    contactReason: contactReason || '',
    firebaseKey: firebaseKey || null
  });

  const handleProjectInputChange = (e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.firebaseKey) {
      updateContacts(contact).then((contactsArray) => setContacts(contactsArray));
    } else {
      addContact(contact).then((contactsArray) => setContacts(contactsArray));
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
            value={contact.contactName}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Email: </label>
          <input
            name='contactEmail'
            type='text'
            placeholder='Your email'
            value={contact.contactEmail}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Phone: </label>
          <input
            name='contactPhone'
            type='text'
            placeholder='Contact Phone'
            value={contact.contactPhone}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Date: </label>
          <input
            name='contactDate'
            type='text'
            placeholder='Date'
            value={contact.contactDate}
            onChange={handleProjectInputChange}
          >
          </input>
          <label>Reason: </label>
          <input
            name='contactReason'
            type='text'
            placeholder='Reason'
            value={contact.contactReason}
            onChange={handleProjectInputChange}
          >
          </input>
          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
    </>
  );
};

ContactForm.propTypes = {
  contactFormTitle: PropTypes.string.isRequired,
  setContacts: PropTypes.func,
  firebaseKey: PropTypes.string,
  contactName: PropTypes.string,
  contactEmail: PropTypes.string,
  contactPhone: PropTypes.string,
  contactDate: PropTypes.string,
  contactReason: PropTypes.string
};

export default ContactForm;
