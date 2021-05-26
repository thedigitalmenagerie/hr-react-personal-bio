import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getContacts } from '../helpers/data/ContactData';
import ContactForm from '../forms/ContactForm';
import ContactCards from '../components/ContactCardComponent';
import './vStyles/ContactView.scss';

export default function ContactView({ admin }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((response) => setContacts(response));
  }, []);

  return (
    <div className="contactContainer">
       <div className="innerContainer">
                <ContactForm
                  contactFormTitle="Contact Honey-Rae"
                  contacts={contacts}
                  setContacts={setContacts}
                />
        </div>
        {
          admin !== null
          && <ContactCards
        admin={admin}
        contacts={contacts}
        setContacts={setContacts}
        />
        }
    </div>
  );
}

ContactView.propTypes = {
  admin: PropTypes.any,
};
