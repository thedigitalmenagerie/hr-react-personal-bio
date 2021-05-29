import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getContacts } from '../helpers/data/ContactData';
import ContactForm from '../forms/ContactForm';
import ContactCards from '../components/ContactCardComponent';
import GitHub from '../assets/gitHub.png';
import Instagram from '../assets/instagram.png';
import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import './vStyles/ContactView.scss';

export default function ContactView({
  admin,
  setAdmin,
  user,
  setUser,
}) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((response) => setContacts(response));
  }, []);

  return (
    <div className="contactView">
            {
          user !== null
          && <div>
            { user
              ? <div>
                  <ContactForm
                    contactFormTitle="Contact Honey-Rae"
                    setContacts={setContacts}
                    admin={admin}
                    setAdmin={setAdmin}
                    user={user}
                    setUser={setUser}
                  />
                <div id="hiddenUserContent">
                  <div>Phone: (615)-956-1551</div>
                  <div>Email: honeyraeswan@gmail.com</div>
                  <div className="cardLinks">
                    <a className="outerLink" href="https://github.com/thedigitalmenagerie" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={GitHub} alt="link icon"/></a>
                    <a className="outerLink" href="https://www.linkedin.com/in/honeyraeswan/" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={LinkedIn} alt="link icon"/></a>
                    <a className="outerLink" href="https://github.com/thedigitalmenagerie" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={Twitter} alt="link icon"/></a>
                    <a className="outerLink" href="https://github.com/thedigitalmenagerie" target="_blank" rel="noopener noreferrer"><img className="linkImg" src={Instagram} alt="link icon"/></a>
                  </div>
                </div>
              </div>
              : <div>
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
                      admin={admin}
                      setAdmin={setAdmin}
                      user={user}
                      setUser={setUser}
                    />
                  ))}</div>
            } </div>
          }
    </div>
  );
}

ContactView.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};
