import React, { useState } from 'react';
import addContact from '../helpers/data/ContactData';

export default function ContactForm() {
  const [contact, setContact] = useState({
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactDate: '',
    contactReason: ''
  });

  const handleProjectInputChange = (e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
  };

  return (
    <>
      <div className="ContactForm">
        <form
          id="addContactForm"
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h3 id="addContactFormTitle">Contact</h3>
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
}
