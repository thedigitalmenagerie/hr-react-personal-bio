import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { getContacts } from '../helpers/data/ContactData';
import ContactForm from '../forms/ContactForm';
import ContactCards from '../components/ContactCardComponent';

export default function ContactView() {
  const [contacts, setContacts] = useState([]);
  const [showAddContactForm, setAddContactForm] = useState(false);

  const handleClick = () => {
    setAddContactForm((prevState) => !prevState);
  };

  useEffect(() => {
    getContacts().then((response) => setContacts(response));
  }, []);

  return (
    <div>
      <div>
        {!showAddContactForm
          ? <Button onClick={handleClick}>Contact</Button>
          : <div>
              <Button onClick={handleClick}>Close Form</Button>
              <ContactForm
                contactFormTitle="Contact Honey-Rae"
                setContacts={setContacts}
              />
            </div>
        }
      </div>

      <hr/>
      {contacts.map((contactInfo) => (
        <ContactCards
        key={contactInfo.firebaseKey}
        firebaseKey={contactInfo.firebaseKey}
        contactName={contactInfo.contactName}
        contactEmail={contactInfo.contactEmail}
        contactPhone={contactInfo.contactPhone}
        contactDate={contactInfo.contactDate}
        contactReason={contactInfo.contactReason}
        setContacts={setContacts}
        />
      ))}
    </div>
  );
}
