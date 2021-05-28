import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
import { addContact, updateContacts } from '../helpers/data/ContactData';
import './fStyles/ContactForm.scss';

const ContactForm = ({
  contacts,
  setContacts,
  contactFormTitle
}) => {
  const [contact, setContact] = useState({
    contactDate: contacts.contactDate || '',
    contactEmail: contacts.contactEmail || '',
    contactName: contacts.contactName || '',
    contactPhone: contacts.contactPhone || '',
    contactReason: contacts.contactReason || '',
    firebaseKey: contacts.firebaseKey || null,
  });

  const handleProjectInputChange = (e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.firebaseKey) {
      updateContacts(contact).then((contactsArray) => setContacts(contactsArray));
    } else {
      addContact(contact).then((contactsArray) => setContacts(contactsArray));

      setContact({
        contactDate: '',
        contactEmail: '',
        contactName: '',
        contactPhone: '',
        contactReason: '',
        firebaseKey: null,
      });
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
          <AnimationWrapper><button id="submitContact" type="submit">Submit Inquiry</button></AnimationWrapper>
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
